<template>
  <breadcrumb-nav />
  <h3>Scorers</h3>
  <el-table
    v-loading="isLoading"
    :data="scorers"
    style="width: 95%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column label="Rank" width="80">
      <template #default="scope">
        <div>{{ scope.$index + 1 }}</div>
      </template>
    </el-table-column>
    <el-table-column label="Player">
      <template #default="scope">
        <div>
          <span>{{ scope.row.player.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Club">
      <template #default="scope">
        <div class="table__cell table__cell-club">
          <el-image
            style="width: 30px; height: 30px" :src="scope.row.team.crestUrl" fit="contain" />
          <span class="scorer__team-name">{{ scope.row.team.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Nationality">
      <template #default="scope">
        <div>
          <span>{{ scope.row.player.nationality }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Stat">
      <template #default="scope">
        <div class="table__cell-points">{{ scope.row.numberOfGoals }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Scorer } from '@/common/types';

const store = useStore();

const scorers = computed(() => store.state.stats.scorers);
const isLoading = computed(() => store.getters.isLoading);

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: Scorer
  rowIndex: number
}) => {
  if (rowIndex === 0) {
    return 'success-row';
  }
  return '';
};

store.dispatch('fetchScorers');
</script>

<style lang="scss">
.scorer__team-name {
  margin-left: 10px;
}
</style>
