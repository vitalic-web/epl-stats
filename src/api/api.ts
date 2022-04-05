import axios from 'axios';
import { BASE_URL, TOKEN } from '@/constants';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    'X-Auth-Token': TOKEN,
  },
});

const api = {
  getTeams: () => instance({
    method: 'GET',
    url: '/competitions/2021/teams',
  }),
};

export default api;
