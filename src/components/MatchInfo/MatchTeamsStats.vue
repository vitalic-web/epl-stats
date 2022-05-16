<template>
  <div class="teams-stats">MatchTeamsStats</div>
  <div>{{ teamsStats }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  teamsStats: Object,
});
</script>

<style lang="scss">
.teams-stats {
  margin-top: 10px;
  border: 1px solid red;
  width: 97%;
}
</style>
