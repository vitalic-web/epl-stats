<template>
  <el-main>
    <div class="main">
      <PageLink name="Teams" routeName="teams" />
      <PageLink class="main__element" name="Table" routeName="table" />
      <PageLink name="Scorers" routeName="scorers" />
    </div>
  </el-main>
</template>

<script setup lang="ts">
import PageLink from '@/components/PageLink.vue';
</script>

<style lang="scss">
.main {
  display: flex;
  &__element {
    margin: 0 20px;
  }
}
</style>
