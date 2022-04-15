<template>
  <BackToMainLink />
  <h3>Table</h3>
  <el-table v-loading="isLoading" :data="table" style="width: 100%">
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
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import BackToMainLink from '@/components/BackToMainLink.vue';

const store = useStore();

const table = computed(() => store.state.table);
const isLoading = computed(() => store.getters.isLoading);

const addPlus = (gd: number): string => (String(gd).includes('-') ? String(gd) : `+${gd}`);

onMounted(() => {
  store.dispatch('fetchTable');
  console.log(table);
});
</script>

<style lang="scss">
.table {
  &__cell {
    display: flex;
    align-items: center;
    justify-content: center;
    &-club {
      justify-content: start;
    }
    &-points {
      font-weight: bold;
      color: #000;
    }
  }
}

.el-table th.el-table__cell>.cell {
  display: flex;
  justify-content: center;
}
</style>
