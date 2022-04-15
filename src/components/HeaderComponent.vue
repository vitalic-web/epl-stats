<template>
  <el-header>
    <p style="margin: 0">{{ name }}</p>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Header');
</script>
