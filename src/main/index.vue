<template>
  <head-nav></head-nav>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import HeadNav from "@/components/NavBar/index";
export default {
  name: "publicPage",
  components: { HeadNav }
};
</script>
