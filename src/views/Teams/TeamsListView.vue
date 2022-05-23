<template>
  <breadcrumb-nav />
  <h3>Teams</h3>
  <div class="teams-container" v-loading="isLoading">
    <el-card v-for="team in teams" :key="team.id" :body-style="{ padding: '0px' }">
      <img
        :alt="`${team.name} logo`"
        :src="team.crestUrl"
        class="team__logo"
      />
      <div style="padding: 14px">
        <span>{{ team.name }}</span>
        <div class="bottom">
          <el-button
            type="text"
            class="button"
            @click="getTeamInfo(team.id)"
          >More info</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const teams = computed(() => store.state.teams.allTeams);
const isLoading = computed(() => store.getters.isLoading);

const getTeamInfo = (teamId: string) => {
  router.push({ name: 'team', params: { id: teamId } });
};

store.dispatch('fetchTeams');
</script>

<style lang="scss">
.teams-container {
  width: 95%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 10px;
}

.team__logo {
  width: 200px;
  height: 200px;
  margin-top: 20px;
}

.icon {
  margin-right: 5px;
}
</style>
