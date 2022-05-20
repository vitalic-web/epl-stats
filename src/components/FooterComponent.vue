<template>
  <footer class="footer">
    <div class="footer__name">
      <img
        class="footer__logo"
        src="../assets/epl-logo-main.png"
        alt="English Premier League Logo"
      >
      English Premier League Stats
    </div>
    <div class="footer__author">
      <span class="footer__copy-right">&#169;</span>
      <span>vitalic-web</span>
      <div class="footer__github">
        <img class="footer__github-logo" src="../assets/GitHub-logo.png" alt="GitHub logo">
        <a
          class="footer__github-link"
          href="https://github.com/vitalic-web"
          target="_blank"
        >
          github.com/vitalic-web
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.footer {
  width: 95%;
  margin-top: auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid gray;
  &__name {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  &__copy-right {
    font-size: 24px;
    margin-right: 5px;
  }
  &__author {
    display: flex;
    align-items: center;
  }
  &__github {
    display: flex;
    align-items: center;
  }
  &__github-logo {
    width: 20px;
    height: 20px;
    margin: 0 5px 0 15px;
  }
  &__github-link {
    color: black;
    text-decoration: none;
  }
}
</style>
