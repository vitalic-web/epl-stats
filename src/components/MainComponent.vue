<template>
  <main class="main">
    <PageLink name="Teams" route-name="teams" img-path="src/assets/top6.png">
      <img class="main__img" src="../assets/top6.png" alt="teams">
    </PageLink>
<!--    <PageLink name="Table" route-name="table" />-->
    <PageLink name="Scorers" route-name="scorers">
      <img class="main__img" src="../assets/epl-scorers.jpeg" alt="scorers">
    </PageLink>
<!--    <PageLink name="Winners" route-name="winners" />-->
<!--    <PageLink name="Matches" route-name="matches" :query="weekDates" />-->
  </main>
</template>

<script setup lang="ts">
import PageLink from '@/components/PageLink.vue';
import { getCurrentWeekDates } from '@/common/utils';

const weekDates = getCurrentWeekDates();
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 95%;
  &__img {
    height: 300px;
    object-fit: contain;
  }
}
</style>
