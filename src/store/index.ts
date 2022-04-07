import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
  state: {
    loadingStatus: 'notLoading',
    teams: [],
  },
  getters: {
    isLoading(state) {
      return state.loadingStatus === 'loading';
    },
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_TEAMS(state, teams) {
      state.teams = teams;
    },
  },
  actions: {
    fetchTeams(context) {
      context.commit('SET_LOADING_STATUS', 'loading');
      EventService.getTeams()
        .then((res) => {
          context.commit('SET_LOADING_STATUS', 'notLoading');
          context.commit('SET_TEAMS', res.data.teams);
        });
    },
  },
  modules: {
  },
});
