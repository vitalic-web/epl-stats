<template>
  <div class="teams-stats">
    <div class="teams-stats__item">
      <span>number of matches:</span><span>{{ teamsStats.numberOfMatches }}</span>
    </div>
    <div class="teams-stats__item">
      <span>total goals:</span><span>{{ teamsStats.totalGoals }}</span>
    </div>
    <div class="teams-stats__item">
      <span class="teams-stats__club-name">{{ teamsStats.homeTeam.name }}:</span>
      <span>
        wins {{ teamsStats.homeTeam.wins }},
        draws {{ teamsStats.homeTeam.draws }},
        losses {{ teamsStats.homeTeam.losses }}
      </span>
    </div>
    <div class="teams-stats__item">
      <span class="teams-stats__club-name">{{ teamsStats.awayTeam.name }}:</span>
      <span>
        wins {{ teamsStats.awayTeam.wins }},
        draws {{ teamsStats.awayTeam.draws }},
        losses {{ teamsStats.awayTeam.losses }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  teamsStats: Object,
});
</script>

<style lang="scss">
.teams-stats {
  margin-top: 10px;
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  &__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__club-name {
    text-decoration: underline;
  }
}
</style>
