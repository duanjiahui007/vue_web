<template>
  <div class="experience ">
    <div class="ex-item online-content">
      <div class="ex-head">
        <i class="icon-image"></i>
        <h4>Work experience</h4>
      </div>
      <div class="ex-body online-from">
        <work
          :editorId="'editor_' + index"
          :work-data="item"
          :index="index"
          @datasave="getWorkData"
          @datadel="delWorkData"
          v-for="(item, index) in work"
          :key="index"
        ></work>
      </div>
      <div class="ex-footer">
        <a-button @click="addWork"> </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Work from "./components/work";
export default {
  name: "experience",
  data() {
    return {
      work: [
        {
          companyName: "firstNAme",
          duration: "YES_first",
          periodStart: null,
          periodEnd: null,
          jobOther: "225000dsffs"
        }
      ],
      edu: [
        {
          schoolName: "",
          course: "",
          time: "",
          other: ""
        }
      ],
      others: [{}],
      setOf: {
        addTitle: "",
        content: ""
      }
    };
  },
  methods: {
    // 接受work 数据
    getWorkData(val, index) {
      this.work.splice(index, 1, val);
      console.log(this.work, index);
    },
    // 删除work 数据
    delWorkData(index) {
      this.work.splice(index, 1);
      console.log(this.work, index);
    },
    // 添加work 数据
    addWork() {
      let obj = {
        companyName: "",
        duration: "",
        periodStart: null,
        periodEnd: null,
        jobOther: ""
      };
      this.work.push(obj);
    }
  },
  components: {
    Work
  }
};
</script>

<style lang="less" scoped>
@import "./less/public.less";
.ex-item {
  background-color: #ffffff;
  width: 75%;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  margin-bottom: 20px;
  flex-direction: column;
  padding: 0;
  .ex-head {
    padding: 14px 62px;
    display: flex;
    align-items: center;
    i {
      display: inline-block;
      margin-right: 16px;
      width: 20px;
      height: 18px;
      background-image: url("../../../assets/images/online/icon.png");
      background-repeat: no-repeat;
      background-position-x: 0;
    }
    h4 {
      font-size: 22px;
      color: #14a3ba;
    }
  }

  .ex-body {
    border-top: 1px solid #dee4e7;
    padding: 20px 62px;
  }
}
</style>
