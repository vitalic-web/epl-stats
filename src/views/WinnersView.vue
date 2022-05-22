<template>
  <breadcrumb-nav />
  <h3>Winners</h3>
  <el-row class="winners-container" v-loading="isLoading">
    <el-col
      v-for="winner in winners"
      :key="winner.id"
      :span="6"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img v-if="winner.winner"
          :alt="`${winner.winner.name} logo`"
          :src="winner.winner.crestUrl"
          class="winner__logo"
        />
        <div style="padding: 14px">
          <span>{{ winner.winner ? winner.winner.name : 'No winner' }}</span>
          <div class="bottom">{{ winner.years }}</div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const winners = computed(() => store.state.stats.winners);
const isLoading = computed(() => store.getters.isLoading);

store.dispatch('fetchWinners');
</script>

<style lang="scss">
.winners-container {
  width: 95%;
}

.winner__logo {
  width: 150px;
  height: 150px;
  margin-top: 20px;
}
</style>
