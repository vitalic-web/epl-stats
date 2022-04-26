<template>
  <BackToMainLink url="/" pageName="main" />
  <h3>Matches</h3>
  <el-date-picker
    v-model="dates"
    type="daterange"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
    @change="pickDates"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
// TODO: fix luxon type
import { DateTime } from 'luxon';
import BackToMainLink from '@/components/BackLink.vue';
import EventService from '@/services/EventService';

const dates = ref([]);

const pickDates = async () => {
  const startDate = DateTime.fromJSDate(dates.value[0]).toISODate();
  const endDate = DateTime.fromJSDate(dates.value[1]).toISODate();
  const matches = await EventService.getMatches(startDate, endDate);
  console.log(matches.data);
};
</script>
