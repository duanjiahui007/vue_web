<template>
  <div class="onlinePage">
    <div class="online-title">
      <time-axis :Num="Bnum"></time-axis>
    </div>
    <!-- <resume></resume>
    <basic></basic>
    <experience></experience> -->
    <keep-alive>
      <component
        :is="isCompontent"
        :Num="Bnum"
        @nextStep="next"
        @lastStep="goBack"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import TimeAxis from "./components/TimeAxis.vue";
import Resume from "./componentsPages/resume.vue";
import basic from "./componentsPages/basic.vue";
import experience from "./componentsPages/experience";
export default {
  name: "onlinePage",
  data() {
    return {
      Bnum: 1
    };
  },

  methods: {
    goBack() {
      if (this.Bnum > 1) {
        this.Bnum--;
      }
      console.log(this.Bnum, "last");
    },
    next() {
      if (this.Bnum < 6) {
        this.Bnum++;
      }
      console.log(this.Bnum, "next");
    }
  },
  components: {
    TimeAxis,
    Resume,
    basic,
    experience
  },
  computed: {
    isCompontent() {
      let components = "";
      switch (this.Bnum) {
        case 1:
          components = "Resume";
          break;
        case 2:
          components = "Resume";
          break;
        case 3:
          components = "basic";
          break;
        case 4:
          components = "basic";
          break;
        case 5:
          components = "experience";
          break;
        case 6:
          components = "experience";
          break;
      }
      return components;
    }
  }
};
</script>

<style lang="less" scoped>
.online-title {
  height: 0.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.208333rem;
}
</style>
