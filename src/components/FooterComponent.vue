<template>
  <footer class="footer">
    <p>{{ name }}</p>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Footer');
</script>

<style lang="scss">
.footer {
  margin-top: auto;
}
</style>
