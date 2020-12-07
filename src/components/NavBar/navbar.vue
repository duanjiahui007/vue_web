<template>
  <div class="navBody">
    <nav class="navMenu">
      <div
        class="menu"
        :class="{ onSelect: 'home' === isPath }"
        data-path="home"
      >
        <router-link to="home">Home</router-link>
      </div>
      <div
        class="menu"
        :class="{ onSelect: 'online' === isPath }"
        data-path="online"
      >
        <router-link to="online">online production</router-link>
      </div>
      <div
        class="menu"
        :class="{ onSelect: 'model' === isPath }"
        data-path="model"
      >
        <router-link to="">resource model</router-link>
      </div>
      <div
        class="menu"
        :class="{ onSelect: 'personal' === isPath }"
        data-path="personal"
      >
        <router-link to="">personal center</router-link>
      </div>
      <div class="menu" :class="{ onSelect: 'us' === isPath }" data-path="us">
        <router-link to="">connert us</router-link>
      </div>
      <div class="line" ref="lines"></div>
    </nav>
    <div
      class="login"
      @click.stop="changeLogin"
      :class="{ hoverLogin: showLogin }"
    >
      <div class="loginBtn">log in/log up</div>
      <div class="selectloifn" v-show="showLogin">
        <router-link to="home">log in</router-link>
        <router-link to="online">log up</router-link>
      </div>
    </div>
  </div>
  <div class="minNav">
    <div class="min-nav-box" @click.stop="changeMobile('nav')">
      <i class="JS JS-menu" :class="{ selNav: mobileNav }"></i>
      <div class="menu-box mobile-box" v-show="mobileNav">
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
      </div>
    </div>
    <div class="min-login-box" @click.stop="changeMobile('login')">
      <i class="JS JS-me" :class="{ selLogin: mobileLogin }"></i>
      <div class="login-box mobile-box" v-show="mobileLogin">
        <router-link to="">log up</router-link>
        <router-link to="">log in</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "navbar",
  setup() {
    // line 位置移动
    let lines = ref(null);
    let store = new useStore();
    // 点击
    function moveLine(event) {
      let ent = event.currentTarget || event.srcElement;
      console.log(ent.dataset.path);
      store.dispatch("nav/AsyncHeaderPath", ent.dataset.path);
      let child = ent.parentNode.children || ent.parentElement.children;
      for (let n = 0; n < child.length - 1; n++) {
        child[n].classList.remove("onSelect");
      }
      ent.classList.add("onSelect");
      let left = ent.offsetLeft;
      let w = ent.offsetWidth;
      let lineW = w * 0.8;
      let ofLeft = (w - lineW) / 2;
      lines.value.style.left = left + ofLeft + "px";
      lines.value.style.width = lineW + "px";
    }
    // 鼠标移上
    function mouseLine(event) {
      let ent = event.currentTarget || event.srcElement;
      let left = ent.offsetLeft;
      let w = ent.offsetWidth;
      let lineW = w * 0.8;
      let ofLeft = (w - lineW) / 2;
      lines.value.style.left = left + ofLeft + "px";
      lines.value.style.width = lineW + "px";
    }
    // 鼠标移开
    function resetLine() {
      let ent = document.querySelector(".onSelect");
      let left = ent.offsetLeft;
      let w = ent.offsetWidth;
      let lineW = w * 0.8;
      let ofLeft = (w - lineW) / 2;
      lines.value.style.left = left + ofLeft + "px";
      lines.value.style.width = lineW + "px";
    }

    return { moveLine, lines, resetLine, mouseLine };
  },
  data() {
    return {
      showLogin: false,
      mobileLogin: false,
      mobileNav: false
    };
  },
  created() {
    document.body.onclick = () => {
      this.showLogin = false;
      this.mobileLogin = false;
      this.mobileNav = false;
    };
    window.addEventListener("resize", () => {
      this.resetLine();
    });
  },
  mounted() {
    let adds = document.getElementsByClassName("menu");
    this.resetLine();
    for (let i = 0; i < adds.length; i++) {
      adds[i].addEventListener("click", this.moveLine, true);
      adds[i].addEventListener("mouseover", this.mouseLine, true);
      adds[i].addEventListener("mouseout", this.resetLine, true);
    }
  },
  methods: {
    // pc  点击 显示登陆/注册
    changeLogin() {
      this.showLogin = !this.showLogin;
    },
    // 移动显示 菜单 登陆/注册
    changeMobile(val) {
      if (val === "login") {
        this.mobileLogin = !this.mobileLogin;
        this.mobileNav = false;
      } else {
        this.mobileNav = !this.mobileNav;
        this.mobileLogin = false;
      }
    },
    touchDown(event) {
      let ev = event.currentTarget || event.srcElement;
      this.$store.dispatch("nav/AsyncHeaderPath", ev.dataset.path);
    }
  },
  computed: {
    isPath() {
      return this.$store.getters.header;
    }
  }
};
</script>

<style lang="less" scoped>
// pc大屏显示
.navBody {
  height: 100%;
  display: flex;
  align-items: center;
}
.navMenu {
  position: relative;
  display: flex;
  height: 100%;
  .menu {
    height: 100%;
    margin-right: 40px;
    color: #172945;
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
      color: #172945;
    }
    &:hover a {
      color: #1facb1;
    }
    &:nth-last-child(2) {
      margin-right: 0;
    }
    &.onSelect a {
      color: #1facb1;
    }
  }
  .line {
    position: absolute;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #1facb1;
    left: 0;
    top: calc(50% + 14px);
    transition: all 400ms ease-in-out;
    z-index: -1;
  }
}
.login {
  margin-left: 40px;
  padding: 6px 15px;
  border-radius: 20px;
  border: 1px solid #1facb1;
  color: #1facd1;
  cursor: pointer;
  position: relative;
  transition: all 400ms ease-out;
  font-size: 18px;
  &:hover {
    background-color: #1facb1;
    color: #ffff;
    border-color: #0c6b6e;
  }
  &.hoverLogin {
    background-color: #1facb1;
    color: #ffff;
    border-color: #0c6b6e;
  }
  .selectloifn {
    position: absolute;
    width: 100%;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 6px;
    color: #24292e;
    border: 1px solid #e1e4e8;
    padding: 10px 0 14px;
    &::before {
      content: "";
      display: block;
      width: 0;
      position: absolute;
      border: 12px solid transparent;
      border-bottom-color: #f3f3f3fa;
      top: -24px;
      left: 0;
      right: 0;
      margin: auto;
      transform-origin: center bottom;
      transform: scale(0.7);
    }
    a {
      display: block;
      padding: 0 14px;
      line-height: 24px;
      height: 24px;
      transition: all 600ms ease-in-out;
      color: #24292e;
      &:hover {
        background-color: #1facb1;
        color: #ffffff;
      }
    }
  }
}
// 移动端显示
.minNav {
  display: none;
  i {
    font-size: 26px;
    color: #4eb9d9;
    cursor: pointer;
  }
  .min-nav-box,
  .min-login-box {
    position: relative;
    margin-left: 20px;
  }
  .selLogin,
  .selNav {
    color: #ffffff;
  }
  .mobile-box {
    position: absolute;
    top: calc(100% + 16px);
    right: -70%;
    margin: 0 auto;
    padding: 10px 15px 14px;
    background-color: #2a8bb5;
    border-radius: 5px;
    a {
      display: block;
      color: #ffffff;
      line-height: 26px;
      font-size: 14px;
      border-bottom: 1px solid #4b9ec0;
      white-space: nowrap;
    }
    &::before {
      content: "";
      display: block;
      transform: scaleY(1.4) scaleX(0.8);
      transform-origin: center bottom;
      border: 10px solid transparent;
      border-bottom-color: #2a8bb5;
      width: 0;
      position: absolute;
      top: -20px;
      left: 70%;
      margin: 0 auto;
    }
  }
  .login-box {
    right: -30%;
    &::before {
      left: 55%;
    }
  }
}
@media screen and (max-width: 1400px) and (min-width: 1024px) {
  .navMenu {
    .menu {
      font-size: 16px;
    }
  }
  .login {
    margin-left: 30px;
    padding: 3 10px;
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) {
  .navBody {
    display: none;
  }
  .minNav {
    display: flex;
  }
}
</style>
