import { Module } from 'vuex';
import { Teams, RootState } from '@/common/types';
import EventService from '@/services/EventService';

const teams: Module<Teams, RootState> = {
  state: () => ({
    teams: [],
  }),
  mutations: {
    SET_TEAMS(state, teamsData) {
      state.teams = teamsData;
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
  },
};

export default teams;
