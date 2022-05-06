<template>
  <breadcrumb-nav />
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';

const store = useStore();
const router = useRouter();

const navItems = ref([
  { path: '/', name: 'homepage' },
  { path: null, name: 'teams' },
]);

const teams = computed(() => store.state.teams);
const isLoading = computed(() => store.getters.isLoading);

const getTeamInfo = (teamId: string) => {
  router.push({ name: 'team', params: { id: teamId } });
};

store.dispatch('fetchTeams');
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
