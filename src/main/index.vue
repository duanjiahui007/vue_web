<template>
  <head-nav></head-nav>
  <main>
    <router-view></router-view>
  </main>
  <footer-bar></footer-bar>
</template>
<script>
import HeadNav from "@/components/NavBar/index";
import FooterBar from "@/components/footerBar/index";
export default {
  name: "publicPage",
  components: { HeadNav, FooterBar }
};
</script>
