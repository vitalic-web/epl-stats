<template>
  <p>{{ name }}</p>
  <el-button type="primary" @click="getData">getTeams</el-button>
  <div v-if="isLoading">... is loading</div>
  <div v-else>{{ teams }}</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const name = ref('Main');
const store = useStore();

const teams = computed(() => store.state.teams);
const isLoading = computed(() => store.getters.isLoading);

const getData = async () => {
  await store.dispatch('fetchTeams');
};

onMounted(() => {
  store.dispatch('fetchTeams');
});
</script>
