<template>
  <breadcrumb-nav />
  <h3>Season: {{ seasonDate }}</h3>
  <h4>Match day: {{ season.currentMatchday }}</h4>
  <el-table
    v-loading="isLoading"
    :data="standings"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column label="Position" width="80">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.position }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Club" width="260">
      <template #default="scope">
        <div class="table__cell table__cell-club">
          <el-image
            style="width: 30px; height: 30px" :src="scope.row.team.crestUrl" fit="contain" />
          <span style="margin-left: 10px">{{ scope.row.team.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Played">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.playedGames }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Won">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.won }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Drawn">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.draw }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Lost">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.lost }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="GF">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.goalsFor }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="GA">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ scope.row.goalsAgainst }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="GD">
      <template #default="scope">
        <div class="table__cell">
          <span>{{ addPlus(scope.row.goalDifference) }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Points">
      <template #default="scope">
        <div class="table__cell table__cell-points">
          <span>{{ scope.row.points }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { StandingInfo } from '@/common/types';

const store = useStore();

const standings = computed(() => store.state.stats.table.standings);
const season = computed(() => store.state.stats.table.season);
const isLoading = computed(() => store.getters.isLoading);
const seasonDate = computed(() => store.getters.seasonDate);

const addPlus = (gd: number): string => (String(gd).includes('-') ? String(gd) : `+${gd}`);

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: StandingInfo;
  rowIndex: number;
}) => {
  if (rowIndex === 0) {
    return 'success-row';
  } if (rowIndex === 4) {
    return 'warning-row';
  }
  return '';
};

store.dispatch('fetchTable');
</script>

<style lang="scss">
.el-table th.el-table__cell>.cell {
  display: flex;
  justify-content: center;
}
</style>
