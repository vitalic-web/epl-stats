<template>
  <div class="matches">
    <BackToMainLink url="/" pageName="main" />
    <h3>Matches</h3>
    <el-date-picker
      v-model="dates"
      class="matches__date-picker"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      @change="pickDates"
    />
    <el-button type="primary" @click="() => router.push('matches')">clear query</el-button>
    <div style="margin-top: 10px;">matches.length: {{ matches.length }}</div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, ref, watch, toRefs,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { DateTime } from 'luxon';
import BackToMainLink from '@/components/BackLink.vue';

const router = useRouter();
const route = useRoute();
const store = useStore();

const dates = ref([new Date(String(route.query.startDate)), new Date(String(route.query.endDate))]);

const matches = computed(() => store.state.matches);
const isQuery = computed(() => Object.keys(route.query).length);

const pickDates = () => {
  const startDate = DateTime.fromJSDate(dates.value[0]).toISODate();
  const endDate = DateTime.fromJSDate(dates.value[1]).toISODate();
  router.push({ query: { startDate, endDate } });
};

const routeRef = toRefs(route);

watch(routeRef.query, () => {
  console.log('isQuery', isQuery.value);
  store.dispatch('fetchMatches', route.query);
});

store.dispatch('fetchMatches', route.query);
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
