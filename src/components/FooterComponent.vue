<template>
  <el-footer>
    <p style="margin: 0">{{ name }}</p>
  </el-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Footer');
</script>
