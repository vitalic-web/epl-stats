<template>
<!--  eslint-disable-next-line-->
  <div class="link" @click="getInfo">
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  name: String,
  routeName: String,
});

const router = useRouter();

const getInfo = () => router.push({ name: props.routeName });
</script>

<style lang="scss">
.link {
  border: 1px solid black;
  background-color: aliceblue;
  border-radius: 5px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
}
</style>
