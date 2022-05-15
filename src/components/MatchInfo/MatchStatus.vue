<template>
  <div v-if="isInPlay" class="match-status match-status__in-play">
    <el-icon class="match-status__icon"><alarm-clock /></el-icon>
    <span>{{ status.toLowerCase() }}</span>
  </div>
  <div v-if="isPaused" class="match-status match-status__paused">
    <el-icon class="match-status__icon"><lock /></el-icon>
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
import {
  AlarmClock, CircleCheck, Calendar, Lock,
} from '@element-plus/icons-vue';
import { Statuses } from '@/common/constants';

const props = defineProps({
  status: String,
});

const isInPlay = computed(() => props.status === Statuses.InPlay);
const isFinished = computed(() => props.status === Statuses.Finished);
const isScheduled = computed(() => props.status === Statuses.Scheduled);
const isPaused = computed(() => props.status === Statuses.Paused);
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
    animation: text 3s linear infinite;
  }
  &__paused {
    color: darkgoldenrod;
  }
  @keyframes text {
    50% { opacity: 0; }
  }
}
</style>
