<template>
  <header>
    <img src="" alt="" srcset="" />
    <NavBar></NavBar>
  </header>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/navbar";
export default {
  name: "PublicPage",
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>

<style scoped lang="less">
header {
  height: 97px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 165px;
}
</style>
