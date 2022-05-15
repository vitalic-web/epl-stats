import { Module } from 'vuex';
import {
  Matches, RootState, WeekDates, Match,
} from '@/common/types';
import { getCrestUrl } from '@/common/utils';
import EventService from '@/services/EventService';

const teams: Module<Matches, RootState> = {
  state: () => ({
    allMatches: [],
  }),
  mutations: {
    SET_MATCHES(state, matchesData) {
      state.allMatches = matchesData;
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
  },
};

export default teams;
