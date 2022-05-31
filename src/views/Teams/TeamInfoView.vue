<template>
  <breadcrumb-nav :name="selectedTeam.name" />
  <div id="team-info" class="team-info" v-loading="isLoading">
    <h3>{{ selectedTeam.name }}</h3>
    <img class="team-info__img" :src="selectedTeam.crestUrl" :alt="`${selectedTeam.name} image`">
    <el-descriptions
      title="Information"
      direction="vertical"
      :column="4"
      border
    >
      <el-descriptions-item label="Founded">{{ selectedTeam.founded }}</el-descriptions-item>
      <el-descriptions-item label="Telephone">{{ selectedTeam.phone }}</el-descriptions-item>
      <el-descriptions-item label="Venue" :span="2">{{ selectedTeam.venue }}</el-descriptions-item>
      <el-descriptions-item label="Club Colors">{{ selectedTeam.clubColors }}</el-descriptions-item>
      <el-descriptions-item label="Address">{{ selectedTeam.address }}</el-descriptions-item>
      <el-descriptions-item label="Website">
        <el-link :href="selectedTeam.website" target="_blank" type="primary"
        >{{ selectedTeam.website }}</el-link>
      </el-descriptions-item>
    </el-descriptions>
    <h4 class="team-info__squad-title">Squad</h4>
    <el-table v-if="selectedTeam.squad.length" :data="selectedTeam.squad" style="width: 100%">
      <el-table-column label="Name">
        <template #default="scope"><div>{{ scope.row.name }}</div></template>
      </el-table-column>
      <el-table-column label="Position">
        <template #default="scope"><div>{{ scope.row.position }}</div></template>
      </el-table-column>
      <el-table-column label="Date Of Birth">
        <template #default="scope">
          <div>{{ displayDateOfBirth(scope.row.dateOfBirth) }}</div>
        </template>
      </el-table-column>
      <el-table-column label="Years">
        <template #default="scope"><div>{{ getYears(scope.row.dateOfBirth) }}</div></template>
      </el-table-column>
      <el-table-column label="Nationality">
        <template #default="scope"><div>{{ scope.row.nationality }}</div></template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { DateTime } from 'luxon';

const store = useStore();
const route = useRoute();
const routeRef = toRefs(route);

const selectedTeam = computed(() => store.state.teams.selectedTeam);
const isLoading = computed(() => store.getters.isLoading);

const displayDateOfBirth = (date: string) => {
  const dt = DateTime.fromISO(date).setLocale('en-US');
  return dt.toLocaleString(DateTime.DATE_FULL);
};

const getYears = (date: string) => {
  const start = DateTime.fromISO(date).setLocale('en-US');
  const end = DateTime.now();
  return Math.floor(end.diff(start, 'years').years);
};

watch(routeRef.params, () => {
  store.dispatch('fetchTeamInfo', route.params.id);
});

store.dispatch('fetchTeamInfo', route.params.id);
</script>

<style lang="scss">
.team-info {
  width: 95%;
  padding-bottom: 10px;
  &__img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
  &__squad-title {
    text-align: start;
    margin: 30px 0 5px;
  }
}
#team-info {
  .el-table .cell {
    padding: 0;
  }
}
</style>
