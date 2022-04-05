<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
  <el-button @click="getData" type="primary">test</el-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const api = inject('api');

const getData = async () => {
  const res = await api.getTeams();
  console.log('res', res);
};
</script>
