import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
  state: {
    loadingStatus: 'notLoading',
    teams: [],
    selectedTeam: null,
    table: [],
    scorers: [],
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
    SET_TABLE(state, table) {
      state.table = table;
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
    getTeamInfo({ commit, state }, teamID: number) {
      const selectedTeam = state.teams.find((team: {id: number}) => team.id === teamID);
      commit('SET_SELECTED_TEAM', selectedTeam);
    },
    async fetchTable({ commit }) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const tableData = await EventService.getTable();
        commit('SET_TABLE', tableData.data.standings[0].table);
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
        // TODO: fix async get crestUrl
        // scorersData.data.scorers.forEach(
        //   (item: { team: { id: string, crestUrl: string } }) => {
        //     EventService.getTeamInfo(item.team.id)
        //       .then((res) => {
        //       // eslint-disable-next-line no-param-reassign
        //         item.team.crestUrl = res.data.crestUrl;
        //       })
        //       .catch((err) => {
        //         console.log(err);
        //       });
        //   },
        // );
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
