import { Module } from 'vuex';
import { Teams, RootState, Team } from '@/common/types';
import EventService from '@/services/EventService';

const teams: Module<Teams, RootState> = {
  state: () => ({
    allTeams: [],
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
  }),
  getters: {
    teamsLogos(state): Team[] {
      const teamsLogosData: Team[] = [];
      state.allTeams.forEach((team: Team) => {
        teamsLogosData.push({
          id: team.id,
          name: team.name,
          crestUrl: team.crestUrl,
        });
      });
      return teamsLogosData;
    },
  },
  mutations: {
    SET_ALL_TEAMS(state, teamsData) {
      state.allTeams = teamsData;
    },
    SET_SELECTED_TEAM(state, teamData) {
      state.selectedTeam = teamData;
    },
  },
  actions: {
    async fetchTeams({ commit }) {
      try {
        commit('SET_LOADING_STATUS', 'loading');
        const teamsData = await EventService.getTeams();
        commit('SET_ALL_TEAMS', teamsData.data.teams);
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
  },
};

export default teams;
