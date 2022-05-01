<template>
  <div class="match-info">
    <div class="match-info__teams-container">
      <MatchTeam :team="match.homeTeam" class="match-info__home-team" />
      <MatchTeam :team="match.awayTeam" />
    </div>
    <div class="match-info__time">
      <div v-if="isToday">Today</div>
      <div v-else>{{ displayedDate }}</div>
      <div>{{ displayedTime }}</div>
    </div>
  </div >
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import MatchTeam from './MatchTeam.vue';

const props = defineProps({
  match: Object,
});

const dt = DateTime.fromISO(props.match && props.match.utcDate).setLocale('en-US');
const currentDate = DateTime.now().setLocale('en-US');

const isToday = computed(() => (dt.day === currentDate.day) && (dt.month === currentDate.month));

const displayedDate = computed(() => {
  const format: DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  return dt.toLocaleString(format);
});

const displayedTime = computed(() => dt.toFormat('T'));

console.log(dt);
</script>

<style lang="scss">
.match-info {
  border: 1px solid gray;
  display: flex;
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px;
  &__teams-container {
    display: flex;
    flex-direction: column;
  }
  &__home-team {
    margin-bottom: 10px;
  }
  &__time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid gray;
    padding-left: 10px;
  }
}
</style>
