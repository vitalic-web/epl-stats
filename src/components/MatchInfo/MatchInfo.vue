<template>
  <div class="match-info">
    <div class="match-info__teams-container">
      <MatchStatus :status="match.status" />
      <div class="match-info__team match-info__home-team">
        <MatchTeam :team="match.homeTeam" />
        <div class="match-info__score">{{ match.score.fullTime.homeTeam }}</div>
      </div>
      <div class="match-info__team">
        <MatchTeam :team="match.awayTeam" />
        <div class="match-info__score">{{ match.score.fullTime.awayTeam }}</div>
      </div>
      <MatchReferee :referee="match.referees.length && match.referees[0].name" />
    </div>
    <div class="match-info__time">
      <div>
        <div v-if="isToday">Today</div>
        <div v-else>{{ displayedDate }}</div>
        <div>{{ displayedTime }}</div>
      </div>
    </div>
  </div >
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import MatchTeam from './MatchTeam.vue';
import MatchStatus from './MatchStatus.vue';
import MatchReferee from './MatchReferee.vue';

const props = defineProps({
  match: Object,
});

const dt = DateTime.fromISO(props.match && props.match.utcDate).setLocale('en-US');
const currentDate = DateTime.now().setLocale('en-US');

const isToday = computed(() => (dt.day === currentDate.day) && (dt.month === currentDate.month));
const displayedTime = computed(() => dt.toFormat('T'));

const displayedDate = computed(() => {
  const format: DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  return dt.toLocaleString(format);
});
</script>

<style lang="scss">
.match-info {
  border: 1px solid gray;
  display: flex;
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px;
  width: 450px;
  &__teams-container {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  &__team {
    display: flex;
  }
  &__home-team {
    margin-bottom: 10px;
  }
  &__time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid gray;
    width: 25%;
  }
  &__score {
    margin-right: 10px;
    align-self: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
