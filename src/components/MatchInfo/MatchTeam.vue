<template>
  <div class="match-team">
    <img class="match-team__img" :src="team.crestUrl" :alt="team.name">
    <div class="match-team__name">{{ team.name }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  team: Object,
});
</script>

<style lang="scss">
.match-team {
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 100%;
  &__img {
    width: 50px;
  }
  &__name {
    margin-left: 10px;
  }
}
</style>
