<template>
  <div class="minNav" @click.stop="openClose">
    <i class="JS JS-caidan" v-show="open"></i>
    <i class="JS JS-close" v-show="!open"></i>
  </div>
  <div style="position:fixed">
    <div
      class="Mask"
      v-show="!open"
      @click="openClose"
      @touchmove.prevent
      @scroll.prevent
    ></div>
    <div class="menu-min" :class="{ menuShow: !open }" @click="openClose">
      <router-link to="home" @click="touchDown" data-path="home"
        >Home</router-link
      >
      <router-link to="online" @click="touchDown" data-path="online"
        >online production</router-link
      >
      <router-link to="" @click="touchDown" data-path="model"
        >resource model</router-link
      >
      <router-link to="" @click="touchDown" data-path="personal"
        >personal center</router-link
      >
      <router-link to="" @click="touchDown" data-path="us"
        >connect us</router-link
      >
      <router-link to="">log in</router-link>
      <router-link to="">log up</router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "minNav",
  setup() {
    // 创建vuex 实例
    let store = new useStore();
    function touchDown(event) {
      let ev = event.currentTarget || event.srcElement;
      store.dispatch("nav/AsyncHeaderPath", ev.dataset.path);
    }
    return { touchDown };
  },
  data() {
    return {
      open: true
    };
  },
  methods: {
    openClose() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="less" scoped>
.minNav {
  display: none;
}
.Mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 888;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.menu-min {
  transition: 400ms 0.1s;
  position: fixed;
  top: 0;
  left: -260px;
  width: 260px;
  height: 100%;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 890;
  a {
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    display: block;
    padding: 10px 20px 10px 14px;
  }
}
.menuShow {
  left: 0;
}
@media screen and (max-width: 1024px) {
  .minNav {
    display: block;
    cursor: pointer;
    position: relative;
    .JS-caidan,
    .JS-close {
      font-size: 27px;
    }
  }
}
</style>
