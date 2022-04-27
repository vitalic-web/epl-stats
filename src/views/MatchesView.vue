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
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
// TODO: fix luxon type
import { DateTime } from 'luxon';
import BackToMainLink from '@/components/BackLink.vue';

const router = useRouter();
const route = useRoute();
const store = useStore();

const dates = ref([route.query.startDate, route.query.endDate]);

const matches = computed(() => store.state.matches);
const isQuery = computed(() => Object.keys(route.query).length);
console.log('route', route.query);
console.log('isQuery', isQuery.value);
// console.log('matches', matches);

const pickDates = () => {
  const startDate = DateTime.fromJSDate(dates.value[0]).toISODate();
  const endDate = DateTime.fromJSDate(dates.value[1]).toISODate();
  router.push({ query: { startDate, endDate } });
};

watch(route.query, (value, value2) => {
  console.log('value from watch', value);
  console.log('value2 from watch', value2);
});

if (isQuery.value) {
  console.log('get api data');
}

// store.dispatch('fetchMatches', route.query);
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
