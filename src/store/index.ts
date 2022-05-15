import { createStore } from 'vuex';
import common from '@/store/modules/common';
import teams from '@/store/modules/teams';
import stats from '@/store/modules/stats';
import matches from '@/store/modules/matches';

export default createStore({
  modules: {
    common,
    teams,
    stats,
    matches,
  },
});
