<template>
  <head-nav class="sign-header"></head-nav>
  <main>
    <router-view></router-view>
  </main>
  <footer-bar class="sign-footer"></footer-bar>
</template>

<script>
import HeadNav from "@/components/NavBar/index";
import FooterBar from "@/components/footerBar/index";
export default {
  name: "publicPage",
  components: { HeadNav, FooterBar }
};
</script>

<style lang="less" scoped>
main {
  padding-bottom: 1.4rem;
  background-color: #f3f5f5;
  padding-top: 20px;
  box-sizing: border-box;
  flex-grow: 1;
}
@media screen and (max-width: 960px) {
  main {
    padding-bottom: 2.4rem;
  }
}
</style>
