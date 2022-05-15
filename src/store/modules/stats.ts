import { Module } from 'vuex';
import { Stats, RootState } from '@/common/types';
import { getSeasonYears } from '@/common/utils';
import EventService from '@/services/EventService';

const teams: Module<Stats, RootState> = {
  state: () => ({
    table: {
      season: {
        startDate: '',
        endDate: '',
        currentMatchday: 0,
      },
      standings: [],
    },
  }),
  getters: {
    seasonDate(state) {
      return getSeasonYears(state.table.season.startDate, state.table.season.endDate);
    },
  },
  mutations: {
    SET_TABLE_SEASON(state, season) {
      state.table.season = season;
    },
    SET_TABLE_STANDINGS(state, standings) {
      state.table.standings = standings;
    },
  },
  actions: {
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
  },
};

export default teams;
