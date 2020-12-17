<template>
  <div class="onlinePage">
    <div class="online-title">
      <time-axis :Num="Bnum"></time-axis>
    </div>

    <a-button @click="next">前进</a-button>
    <a-button @click="goBack">后退</a-button>
    <resume></resume>
    <basic></basic>
    <experience></experience>
    <!-- <keep-alive > -->
    <!-- </keep-alive> -->
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
    },
    next() {
      if (this.Bnum < 6) {
        this.Bnum++;
      }
    }
  },
  components: {
    TimeAxis,
    Resume,
    basic,
    experience
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
