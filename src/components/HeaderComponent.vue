<template>
<!--  TODO: fix styles-->
  <header class="header">
    <img
      class="header__epl-logo"
      src="../assets/epl-logo-text.png"
      alt="English Premier League Logo with text"
    >
    <div class="header__logos-container">
      <img
        class="header__club-logo"
        v-for="(club) in teamsLogosData"
        :key="club.id" :src="club.crestUrl"
        :alt="`${club.name} logo`"
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const teamsLogosData = ref([]);

store.dispatch('fetchTeams').then(() => {
  teamsLogosData.value = store.getters.teamsLogos;
});
</script>

<style lang="scss">
.header {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
  &__epl-logo {
    height: 120px;
  }
  &__logos-container {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(20, 1fr);
  }
  &__club-logo {
    width: 43px;
  }
}
</style>
