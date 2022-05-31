<template>
  <!--  eslint-disable  -->
  <header class="header">
<!--    TODO: fix bug call api on click to main from tem info -->
    <router-link to="/">
      <img
        class="header__epl-logo"
        src="../assets/epl-logo-text2.png"
        alt="English Premier League Logo with text"
      >
    </router-link>
    <div class="header__logos-container">
      <img
        class="header__club-logo"
        v-for="(club) in teamsLogosData"
        :key="club.id" :src="club.crestUrl"
        :alt="`${club.name} logo`"
        @click="getTeamInfo(club.id)"
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const teamsLogosData = ref([]);

const getTeamInfo = (teamId: string) => {
  router.push({ name: 'team', params: { id: teamId } });
};

store.dispatch('fetchTeams').then(() => {
  teamsLogosData.value = store.getters.teamsLogos;
});
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  border-bottom: 1px solid black;
  padding: 15px 0;
  &__epl-logo {
    height: 45px;
  }
  &__logos-container {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(20, 1fr);
  }
  &__club-logo {
    width: 38px;
  }
}
</style>
