<template>
  <div class="breadcrumb-nav">
    <el-breadcrumb v-if="name" :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: route.meta.baseUrl }"
      >{{ route.meta.baseUrlName }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-breadcrumb v-else :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>{{ route.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';

const route = useRoute();

defineProps({
  name: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss">
.breadcrumb-nav {
  margin-top: 10px;
  width: 95%;
  display: flex;
  justify-content: flex-end;
}
</style>
