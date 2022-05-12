/* eslint-disable no-shadow */

// TODO: fix to object

import { Common } from '@/common/types';

const state = (): Common => ({
  loadingStatus: 'notLoading',
});

const getters = {
  isLoading(state: Common): boolean {
    return state.loadingStatus === 'loading';
  },
};

const mutations = {
  SET_LOADING_STATUS(state: Common, status: string) {
    state.loadingStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
