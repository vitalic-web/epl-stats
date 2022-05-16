import { Module } from 'vuex';
import {
  Matches, RootState, WeekDates, Match,
} from '@/common/types';
import { getCrestUrl } from '@/common/utils';
import EventService from '@/services/EventService';

const teams: Module<Matches, RootState> = {
  state: () => ({
    allMatches: [],
    teamsStats: {
      numberOfMatches: 0,
      totalGoals: 0,
      homeTeam: {
        id: 0,
        name: '',
        wins: 0,
        draws: 0,
        losses: 0,
      },
      awayTeam: {
        id: 0,
        name: '',
        wins: 0,
        draws: 0,
        losses: 0,
      },
    },
    isLoading: false,
  }),
  mutations: {
    SET_MATCHES(state, matchesData) {
      state.allMatches = matchesData;
    },
    SET_TEAMS_STATS(state, teamsStatsData) {
      state.teamsStats = teamsStatsData;
    },
    SET_IS_LOADING(state, isLoadingStatus) {
      state.isLoading = isLoadingStatus;
    },
  },
  actions: {
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
    async fetchMatchTeamsStats({ commit }, id: number) {
      console.log('is fetchMatchTeamsStats ??????');
      try {
        commit('SET_IS_LOADING', true);
        const teamsStats = await EventService.getMatchTeamsStats(id);
        console.log('teamsStats.data.head2head', teamsStats.data.head2head);
        commit('SET_TEAMS_STATS', teamsStats.data.head2head);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_IS_LOADING', false);
      }
    },
  },
};

export default teams;
