<template>
  <main class="main">
    <PageLink name="Teams" route-name="teams" img-path="src/assets/top6.png">
      <img class="main__img" src="../assets/epl-big-6.jpeg" alt="teams">
    </PageLink>
    <PageLink name="Table" route-name="table">
      <img class="main__img" src="../assets/epl-clubs-min-scaled.webp" alt="table">
    </PageLink>
    <PageLink name="Scorers" route-name="scorers">
      <img class="main__img" src="../assets/epl-scorers.jpeg" alt="scorers">
    </PageLink>
    <PageLink name="Winners" route-name="winners">
      <img class="main__img" src="../assets/epl-winners.jpeg" alt="winners">
    </PageLink>
    <PageLink name="Matches" route-name="matches" :query="weekDates">
      <img class="main__img" src="../assets/epl-matches.jpeg" alt="matches">
    </PageLink>
  </main>
</template>

<script setup lang="ts">
import PageLink from '@/components/PageLink.vue';
import { getCurrentWeekDates } from '@/common/utils';

const weekDates = getCurrentWeekDates();
</script>

<style lang="scss">
.main {
  margin-top: 30px;
  width: 95%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  &__img {
    height: 235px;
    width: 65%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
