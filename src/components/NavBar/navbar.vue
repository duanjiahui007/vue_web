<template>
  <div class="navBody">
    <nav class="navMenu">
      <div class="menu" :class="{ onSelect: '/' === isPath }" data-path="/">
        <router-link to="/">Hone</router-link>
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
    <div class="login">
      <div class="loginBtn">log in/log up</div>
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
      store.dispatch("AsyncHeaderPath", ent.dataset.path);
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
      isPath: ""
    };
  },
  created() {
    this.isPath = this.$store.getters.header;
  },
  mounted() {
    let adds = document.getElementsByClassName("menu");
    this.resetLine();
    for (let i = 0; i < adds.length; i++) {
      adds[i].addEventListener("click", this.moveLine, true);
      adds[i].addEventListener("mouseover", this.mouseLine, true);
      adds[i].addEventListener("mouseout", this.resetLine, true);
    }
  }
};
</script>

<style lang="less" scoped>
.navBody {
  height: 100%;
  display: flex;
  align-items: center;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
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
}
</style>
