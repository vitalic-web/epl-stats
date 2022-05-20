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
      <MatchReferee :referee="match.referees.length ? match.referees[0].name : null" />
      <el-collapse @change="showTeamsStats">
        <el-collapse-item name="stats">
            <template #title>
              <div class="match-info__stats">
                <el-icon class="header-icon"><histogram /></el-icon>
                <span class="match-info__stats-title">show teams stats</span>
              </div>
            </template>
          <MatchTeamsStats v-if="currentTeamsStats" :teamsStats="currentTeamsStats" />
        </el-collapse-item>
      </el-collapse>
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
import { Histogram } from '@element-plus/icons-vue';
import useDates from '@/composables/useDates';
import useTeamsStats from '@/composables/useTeamsStats';
import MatchTeam from './MatchTeam.vue';
import MatchStatus from './MatchStatus.vue';
import MatchReferee from './MatchReferee.vue';
import MatchTeamsStats from './MatchTeamsStats.vue';

const props = defineProps({
  match: Object,
});

const { isToday, displayedTime, displayedDate } = useDates(props.match && props.match.utcDate);
const { currentTeamsStats, showTeamsStats } = useTeamsStats(props.match && props.match.id);
</script>

<style lang="scss">
.match-info {
  border: 1px solid gray;
  display: flex;
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px;
  width: 500px;
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
    width: 22%;
  }
  &__score {
    margin-right: 10px;
    align-self: center;
    font-size: 20px;
    font-weight: bold;
  }
  &__stats {
    display: flex;
    align-items: center;
    &-title {
      margin-left: 5px;
    }
  }
}

.el-collapse-item__header {
  font-size: 16px;
  font-weight: normal;
}
</style>
