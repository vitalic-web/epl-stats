<template>
  <el-main>
    <div class="main">
      <PageLink name="Teams" routeName="teams" />
      <PageLink name="Table" routeName="table" />
      <PageLink name="Scorers" routeName="scorers" />
      <PageLink name="Winners" routeName="winners" />
    </div>
  </el-main>
</template>

<script setup lang="ts">
import PageLink from '@/components/PageLink.vue';
</script>

<style lang="scss">
.main {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 300px 300px 300px;
  &__element {
    margin: 0 20px;
  }
}
</style>
