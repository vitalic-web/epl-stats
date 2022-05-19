/* eslint-disable no-param-reassign */
import { Module } from 'vuex';
import {
  Matches, RootState, WeekDates, Match,
} from '@/common/types';
import { getCrestUrl } from '@/common/utils';
import EventService from '@/services/EventService';

const teams: Module<Matches, RootState> = {
  state: () => ({
    allMatches: [],
    teamsStats: [],
    isLoading: false,
  }),
  getters: {
    currentTeamsStats: (state) => (id: number) => state.teamsStats
      .find((item) => item.matchId === id),
  },
  mutations: {
    SET_MATCHES(state, matchesData) {
      state.allMatches = matchesData;
    },
    SET_TEAMS_STATS(state, teamsStatsData) {
      state.teamsStats.push(teamsStatsData);
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
            match.homeTeam.crestUrl = getCrestUrl(match.homeTeam.id);
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
      try {
        commit('SET_IS_LOADING', true);
        const teamsStatsData = await EventService.getMatchTeamsStats(id);
        const teamsStats = {
          matchId: teamsStatsData.data.match.id,
          ...teamsStatsData.data.head2head,
        };
        commit('SET_TEAMS_STATS', teamsStats);
      } catch (error) {
        console.log('error');
      } finally {
        commit('SET_IS_LOADING', false);
      }
    },
  },
};

export default teams;
