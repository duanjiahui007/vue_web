<template>
  <div class="home">
    <header>
      <img src="" alt="" srcset="" />
      <NavBar></NavBar>
    </header>
  </div>
</template>

<script>
import NavBar from "./components/navbar";
export default {
  name: "Home",
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
