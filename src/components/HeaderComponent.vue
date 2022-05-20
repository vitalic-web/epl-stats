<template>
  <header>
    <p>{{ name }}</p>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Header');
</script>
