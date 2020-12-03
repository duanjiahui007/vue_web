<template>
  <header-bar></header-bar>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderBar from "@/components/NavBar/index";
export default {
  name: "PublicPage",
  components: { HeaderBar }
};
</script>
