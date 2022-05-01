<template>
  <div v-if="isInPlay" class="match-status match-status__in-play">
    <el-icon class="match-status__icon"><alarm-clock /></el-icon>
    <span>{{ status.toLowerCase() }}</span>
  </div>
  <div v-if="isFinished" class="match-status match-status__finished">
    <el-icon class="match-status__icon"><circle-check /></el-icon>
    <span>{{ status.toLowerCase() }}</span>
  </div>
  <div v-if="isScheduled" class="match-status match-status__scheduled">
    <el-icon class="match-status__icon"><calendar /></el-icon>
    <span>{{ status.toLowerCase() }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { AlarmClock, CircleCheck, Calendar } from '@element-plus/icons-vue';

const props = defineProps({
  status: String,
});

const isInPlay = computed(() => props.status === 'IN_PLAY');
const isFinished = computed(() => props.status === 'FINISHED');
const isScheduled = computed(() => props.status === 'SCHEDULED');
</script>

<style lang="scss">
.match-status {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &__icon {
    margin-right: 5px;
  }
  &__scheduled {
    color: blue;
  }
  &__finished {
    color: green;
  }
  &__in-play {
    color: darkorange;
  }
}
</style>
