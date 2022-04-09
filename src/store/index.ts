import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
  state: {
    loadingStatus: 'notLoading',
    teams: [],
    selectedTeam: null,
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
    SET_SELECTED_TEAM(state, team) {
      state.selectedTeam = team;
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
    getTeamInfo({ commit, state }, teamID: number) {
      const selectedTeam = state.teams.find((team: {id: number}) => team.id === teamID);
      commit('SET_SELECTED_TEAM', selectedTeam);
    },
  },
  modules: {
  },
});
