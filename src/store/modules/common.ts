import { Module } from 'vuex';
import { Common, RootState } from '@/common/types';

const common: Module<Common, RootState> = {
  state: () => ({
    loadingStatus: 'notLoading',
  }),
  getters: {
    isLoading(state): boolean {
      return state.loadingStatus === 'loading';
    },
  },
  mutations: {
    SET_LOADING_STATUS(state, status: string) {
      state.loadingStatus = status;
    },
  },
};

export default common;
