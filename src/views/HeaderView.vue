<template>
  <p>{{ name }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Header');
</script>
