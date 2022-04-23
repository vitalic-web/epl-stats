import axios from 'axios';
import {
  API_URL,
  TOKEN,
} from '@/common/constants';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    'X-Auth-Token': TOKEN,
  },
});

export default {
  getLeagueInfo() {
    return apiClient.get('/competitions/2021');
  },
  getTeams() {
    return apiClient.get('/competitions/2021/teams');
  },
  getTable() {
    return apiClient.get('competitions/2021/standings');
  },
  getScorers(limit: number) {
    return apiClient.get(
      'competitions/2021/scorers',
      {
        params: {
          limit,
        },
      },
    );
  },
  getTeamInfo(id: string) {
    return apiClient.get(`teams/${id}`);
  },
};
