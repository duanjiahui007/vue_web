<template>
  <header>
    <img :src="logo" alt="JianShi" :srcset="logo_2x" />
    <nav-bar></nav-bar>
  </header>
</template>

<script>
import NavBar from "./navbar";
import logo from "@/assets/images/home/logo.png";
import logo_2x from "@/assets/images/home/logo@2x.png";
export default {
  name: "headerBox",
  data() {
    return { logo, logo_2x };
  },
  components: {
    NavBar
  }
};
</script>

<style lang="less" scoped>
header {
  height: 97px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 165px;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 21.213px 30px 0px rgba(158, 158, 158, 0.3);
  transition: all 400ms linear;
  background-color: #ffffff;
  z-index: 100;
  img {
    height: 60px;
    transition: all 400ms linear;
  }
}

@media screen and (max-width: 1400px) {
  header {
    height: 60px;
    img {
      height: 40px;
    }
  }
}

@media screen and (max-width: 1400px) and (min-width: 1100px) {
  header {
    padding: 0 90px;
  }
}

@media screen and (max-width: 1100px) and (min-width: 1024px) {
  header {
    padding: 0 20px;
  }
}

@media screen and (max-width: 1024px) {
  header {
    padding: 10px 15px;
    box-shadow: none;
    border-bottom: 1px solid #ffffff;
    background-image: radial-gradient(
      circle at center,
      #e3f1f1 23%,
      #caf8f7 100%
    );
  }
}
@media screen and (max-width: 960px) {
  header {
    box-shadow: none;
    border-bottom: 1px solid #ffffff;
    background-image: radial-gradient(
      circle at center,
      #e3f1f1 23%,
      #caf8f7 100%
    );
    img {
      height: 30px;
    }
  }
}
</style>
