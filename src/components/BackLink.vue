<template>
  <el-link type="primary" :href="url">
    <el-icon class="icon"><arrow-left-bold /></el-icon>
    Back to {{ pageName }} page
  </el-link>
</template>

<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue';

defineProps({
  url: String,
  pageName: String,
});
</script>
