import axios from 'axios';
import {
  API_URL,
  TOKEN,
} from '@/constants';

const apiClient = axios.create({
  baseURL: API_URL,
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
