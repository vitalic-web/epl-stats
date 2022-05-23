<template>
  <div class="matches">
    <breadcrumb-nav class="matches__breadcrumb" />
    <h3>Matches</h3>
    <el-date-picker
      v-model="dates"
      :clearable="false"
      class="matches__margin"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      @change="pickDates"
    />
    <el-button class="matches__margin" type="primary" @click="clear">current week</el-button>
    <div class="matches__list" v-loading="isLoading">
      <MatchInfo v-for="match in matches" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, ref, watch, toRefs,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import MatchInfo from '@/components/MatchInfo/MatchInfo.vue';
import { toDate, getDatesForQuery, getCurrentWeekDates } from '@/common/utils';

const router = useRouter();
const route = useRoute();
const store = useStore();

const dates = ref([
  toDate(route.query.startDate),
  toDate(route.query.endDate),
]);
const routeRef = toRefs(route);

const matches = computed(() => store.state.matches.allMatches);
const isLoading = computed(() => store.getters.isLoading);
const isQuery = computed(() => Boolean(Object.keys(route.query).length));

const pickDates = () => {
  const query = getDatesForQuery(dates.value);
  router.push({ query });
};

const clear = () => {
  const weekDates = getCurrentWeekDates();
  dates.value = [
    toDate(weekDates.startDate),
    toDate(weekDates.endDate),
  ];
  pickDates();
};

const apiCallFromDates = (): void => {
  if (!isQuery.value) {
    store.dispatch('fetchMatches', getCurrentWeekDates());
  } else {
    store.dispatch('fetchMatches', route.query);
  }
};

watch(routeRef.query, () => {
  apiCallFromDates();
});

apiCallFromDates();
</script>

<style lang="scss">
.matches {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &__margin {
    margin-bottom: 20px;
  }
  &__list {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 15px;
  }
}
</style>
