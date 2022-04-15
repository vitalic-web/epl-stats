<template>
  <el-main>
    <div class="main">
      <PageLink class="main__element" name="Teams" routeName="teams" />
      <PageLink name="Table" routeName="table" />
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
    margin-right: 20px;
  }
}
</style>
