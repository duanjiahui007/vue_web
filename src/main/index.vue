<template>
  <head-bar></head-bar>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import HeadBar from "@/components/NavBar/index";
export default {
  name: "PublicPage",
  components: { HeadBar }
};
</script>
