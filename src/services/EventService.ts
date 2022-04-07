import axios from 'axios';
import { BASE_URL, TOKEN } from '@/constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    'X-Auth-Token': TOKEN,
  },
});

export default {
  getTeams() {
    return apiClient.get('/competitions/2021/teams');
  },
};
