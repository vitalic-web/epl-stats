import { createStore } from 'vuex';
import EventService from '@/services/EventService';
import { State } from '@/common/types';

export default createStore<State>({
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
  },
  getters: {
    isLoading(state) {
      return state.loadingStatus === 'loading';
    },
    // seasonYears(state) {
    //   const date = new Date(state.table.season.startDate);
    // }
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
        const scorersData = await EventService.getScorers(5);

        await Promise.all(
          scorersData.data.scorers
            .map(async (scorer: { team: { id: string, crestUrl: string } }) => {
              const teamInfo = await EventService.getTeamInfo(scorer.team.id);
              // eslint-disable-next-line no-param-reassign
              scorer.team.crestUrl = teamInfo.data.crestUrl;
            }),
        );
        commit('SET_SCORERS', scorersData.data.scorers);
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
