<template>
  <HeaderComponent />
  <router-view/>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  margin: 0;
}
</style>
