<template>
  <footer class="footer">
    <div class="footer__name">
      <img class="footer__logo" src="../assets/epl-logo-main.png" alt="English Premier League Logo">
      English Premier League Stats
    </div>
    <div class="footer__author">&#169; vitalic-web</div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.footer {
  width: 100%;
  margin-top: auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  &__name {
    padding-left: 10px;
    display: flex;
  }
  &__author {
    padding-right: 10px;
  }
  &__logo {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>
