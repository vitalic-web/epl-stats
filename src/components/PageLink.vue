<template>
<!--  eslint-disable-next-line-->
  <div class="link" @click="getInfo">
    <slot></slot>
    <h3 class="link__name">{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  name: String,
  routeName: String,
  query: Object,
});

const router = useRouter();

const getInfo = () => router.push({ name: props.routeName, query: props.query });
</script>

<style lang="scss">
.link {
  border: 1px solid black;
  background-color: floralwhite;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &__name {
    margin-right: 15px;
    font-size: 40px;
  }
}
</style>
