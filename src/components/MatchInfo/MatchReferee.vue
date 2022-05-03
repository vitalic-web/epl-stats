<template>
  <div class="match-referee">
    <span class="match-referee__title">
      <el-icon class="match-referee__title-icon">
        <user-filled></user-filled>
      </el-icon>
      referee:
    </span>
    <div class="match-referee__name">{{ isReferee  }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { UserFilled } from '@element-plus/icons-vue';

const props = defineProps({
  referee: String,
});

const isReferee = computed(() => props.referee || 'there is no information yet');
</script>

<style lang="scss">
.match-referee {
  align-self: flex-start;
  margin-top: 10px;
  display: flex;
  &__title {
    display: flex;
    align-items: center;
    color: mediumvioletred;
    &-icon {
      margin-right: 5px;
    }
  }
  &__name {
    margin-left: 5px;
  }
}
</style>
