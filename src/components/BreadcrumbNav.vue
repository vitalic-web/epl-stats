<template>
<!--  <el-breadcrumb :separator-icon="ArrowRight">-->
<!--    <el-breadcrumb-item v-for="item in navItems" :key="item.name">-->
<!--      <a v-if="item.path" :href="item.path">{{ item.name }}</a>-->
<!--      <span v-else>{{ item.name }}</span>-->
<!--    </el-breadcrumb-item>-->
<!--  </el-breadcrumb>-->
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>{{ route.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import { Breadcrumb } from '@/common/types';

const route = useRoute();

// TODO: add isParams

// defineProps({
//   navItems: {
//     type: Array as PropType<Breadcrumb>,
//     required: true,
//   },
// });

console.log('route', route);
console.log('route.params', Object.keys(route.params).length);
</script>
