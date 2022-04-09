<template>
  <el-link type="primary" href="/">
    <el-icon class="icon"><arrow-left-bold /></el-icon>
    Back to main page
  </el-link>
  <p>{{ selectedTeam ? selectedTeam.name : 'no team selected' }}</p>
  <h3>Teams</h3>
  <el-row v-loading="isLoading">
    <el-col
      v-for="team in teams"
      :key="team.id"
      :span="8"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          :alt="`${team.name} logo`"
          :src="team.crestUrl"
          class="team__logo"
        />
        <div style="padding: 14px">
          <span>{{ team.name }}</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button
              type="text"
              class="button"
              @click="getTeamInfo(team.id)"
            >More info</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { ArrowLeftBold } from '@element-plus/icons-vue';

const store = useStore();

const teams = computed(() => store.state.teams);
const isLoading = computed(() => store.getters.isLoading);
const selectedTeam = computed(() => store.state.selectedTeam);

const getTeamInfo = (teamId: number) => store.dispatch('getTeamInfo', teamId);

onMounted(() => {
  store.dispatch('fetchTeams');
  console.log(teams);
});
</script>

<style lang="scss">
.team {
  &__logo {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }
}

.icon {
  margin-right: 5px;
}
</style>
