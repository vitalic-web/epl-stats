import { createStore } from 'vuex';
import EventService from '@/services/EventService';
import {
  State, ScorerTeam, SeasonDates, WeekDates, Match,
} from '@/common/types';
import { getSeasonYears, getCrestUrl } from '@/common/utils';

// TODO: add vuex modules
// common module (loading)
// teams module (teams, team info)
// stats module (table, scorers, winners)
// matches module (matches)
export default createStore({
  state: {
    loadingStatus: 'notLoading',
    teams: [],
    selectedTeam: {
      name: '',
      founded: 0,
      phone: '',
      venue: '',
      clubColors: '',
      address: '',
      website: '',
      squad: {
        name: '',
        position: '',
        dateOfBirth: '',
        nationality: '',
      },
    },
    table: {
      season: {
        startDate: '',
        endDate: '',
        currentMatchday: 0,
      },
      standings: [],
    },
    scorers: [],
    winners: [],
    matches: [],
  },
  getters: {
    isLoading(state) {
      return state.loadingStatus === 'loading';
    },
    seasonDate(state) {
      return getSeasonYears(state.table.season.startDate, state.table.season.endDate);
    },
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_TEAMS(state, teams) {
      state.teams = teams;
    },
    SET_SELECTED_TEAM(state, team) {
      state.selectedTeam = team;
    },
    SET_TABLE_SEASON(state, season) {
      state.table.season = season;
    },
    SET_TABLE_STANDINGS(state, standings) {
      state.table.standings = standings;
    },
    SET_SCORERS(state, scorers) {
      state.scorers = scorers;
    },
    SET_WINNERS(state, winners) {
      state.winners = winners;
    },
    SET_MATCHES(state, matches) {
      state.matches = matches;
    },
  },
  actions: {
    async fetchTeams({ commit }) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const teamsData = await EventService.getTeams();
        commit('SET_TEAMS', teamsData.data.teams);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_LOADING_STATUS', 'notLoading');
      }
    },
    async fetchTeamInfo({ commit }, teamID: string) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const selectedTeam = await EventService.getTeamInfo(teamID);
        commit('SET_SELECTED_TEAM', selectedTeam.data);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_LOADING_STATUS', 'notLoading');
      }
    },
    async fetchTable({ commit }) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const tableData = await EventService.getTable();
        commit('SET_TABLE_SEASON', tableData.data.season);
        commit('SET_TABLE_STANDINGS', tableData.data.standings[0].table);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_LOADING_STATUS', 'notLoading');
      }
    },
    async fetchScorers({ commit }) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const scorersData = await EventService.getScorers(10);

        scorersData.data.scorers
          .map(async (scorer: { team: ScorerTeam }) => {
            // eslint-disable-next-line no-param-reassign
            scorer.team.crestUrl = getCrestUrl(scorer.team.id);
          });
        commit('SET_SCORERS', scorersData.data.scorers);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_LOADING_STATUS', 'notLoading');
      }
    },
    async fetchWinners({ commit }) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const leagueData = await EventService.getLeagueInfo();
        // eslint-disable-next-line array-callback-return
        leagueData.data.seasons.map((season: SeasonDates) => {
          // eslint-disable-next-line no-param-reassign
          season.years = getSeasonYears(season.startDate, season.endDate);
        });
        commit('SET_WINNERS', leagueData.data.seasons.slice(1, 29));
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_LOADING_STATUS', 'notLoading');
      }
    },
    async fetchMatches({ commit }, dates: WeekDates) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const matches = await EventService.getMatches(dates.startDate, dates.endDate);

        matches.data.matches
          .map(async (match: Match) => {
            // eslint-disable-next-line no-param-reassign
            match.homeTeam.crestUrl = getCrestUrl(match.homeTeam.id);
            // eslint-disable-next-line no-param-reassign
            match.awayTeam.crestUrl = getCrestUrl(match.awayTeam.id);
          });
        commit('SET_MATCHES', matches.data.matches);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_LOADING_STATUS', 'notLoading');
      }
    },
  },
  modules: {
  },
});
