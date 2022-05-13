import { Module } from 'vuex';
import { Common } from '@/common/types';

// TODO: fix Module<This is state, This is rootState>
const common: Module<Common, Common> = {
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
