const API_URL = 'https://api.football-data.org/v2';
const TOKEN = '314fc1e1bd1c48cfbd45a2f6ea2d9253';

// eslint-disable-next-line no-shadow
enum Statuses {
  InPlay = 'IN_PLAY',
  Finished = 'FINISHED',
  Scheduled = 'SCHEDULED',
}

export {
  API_URL,
  TOKEN,
  Statuses,
};
