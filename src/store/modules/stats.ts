import { Module } from 'vuex';
import { Stats, RootState, ScorerTeam } from '@/common/types';
import { getSeasonYears, getCrestUrl } from '@/common/utils';
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
    scorers: [],
  }),
  getters: {
    seasonDate(state) {
      return getSeasonYears(state.table.season.startDate, state.table.season.endDate);
    },
  },
  mutations: {
    SET_TABLE_SEASON(state, seasonData) {
      state.table.season = seasonData;
    },
    SET_TABLE_STANDINGS(state, standingsData) {
      state.table.standings = standingsData;
    },
    SET_SCORERS(state, scorersData) {
      state.scorers = scorersData;
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
  },
};

export default teams;
