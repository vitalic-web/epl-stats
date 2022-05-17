<template>
<!--  TODO: fix display same info in all matches -->
  <div class="teams-stats">
    <div>number of matches: {{ teamsStats.numberOfMatches }}</div>
    <div>total goals: {{ teamsStats.totalGoals }}</div>
    <div>
      {{ teamsStats.homeTeam.name }}:
      wins {{ teamsStats.homeTeam.wins }},
      draws {{ teamsStats.homeTeam.draws }},
      losses {{ teamsStats.homeTeam.losses }}
    </div>
    <div>
      {{ teamsStats.awayTeam.name }}:
      wins {{ teamsStats.awayTeam.wins }},
      draws {{ teamsStats.awayTeam.draws }},
      losses {{ teamsStats.awayTeam.losses }}
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
}
</style>
