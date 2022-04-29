<template>
  <div class="matches">
    <BackToMainLink url="/" pageName="main" />
    <h3>Matches</h3>
    <el-date-picker
      v-model="dates"
      :clearable="false"
      class="matches__date-picker"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      @change="pickDates"
    />
    <el-button type="primary" @click="clear">clear query</el-button>
    <div style="margin-top: 10px;">matches.length: {{ matches.length }}</div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, ref, watch, toRefs,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BackToMainLink from '@/components/BackLink.vue';
import { toDate, getDatesForQuery, getCurrentWeekDates } from '@/common/utils';

const router = useRouter();
const route = useRoute();
const store = useStore();

const dates = ref([
  toDate(route.query.startDate),
  toDate(route.query.endDate),
]);
const routeRef = toRefs(route);

const matches = computed(() => store.state.matches);
const isQuery = computed(() => Object.keys(route.query).length);

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
  &__date-picker {
    margin-bottom: 20px;
  }
}
</style>
