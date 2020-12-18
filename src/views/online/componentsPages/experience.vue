<template>
  <div class="experience ">
    <div class="ex-item online-content">
      <div class="ex-head" @click.stop="handleSwitch('work')">
        <div class="ex-head-left">
          <i class="icon-image"></i>
          <h4>Work experience</h4>
        </div>
        <div class="ex-head-right">
          <a-button disabled>
            <template #icon>
              <UpOutlined />
            </template>
          </a-button>
          <a-button>
            <template #icon>
              <DownOutlined />
            </template>
          </a-button>
        </div>
      </div>
      <div class="ex-body online-from" :class="{'ex-close':openState.work,'ex-body-padding':work.length<1}">
        <work
          :editorId="'work_' + index"
          :work-data="item"
          :index="index"
          :com-name="'work'"
          @datasave="getWorkData"
          @datadel="delWorkData"
          v-for="(item, index) in work"
          :key="index"
        ></work>
      </div>
      <div class="ex-footer" @click.stop="addWork" :class="{'ex-close':openState.work}">
        <div class="footer-left">
          <PlusCircleFilled />Add Education experience
        </div>
        <div class="footer-right">
          <a-button disabled>
            <template #icon>
              <UpOutlined />
            </template>
          </a-button>
          <a-button>
            <template #icon>
              <DownOutlined />
            </template>
          </a-button>
        </div>
      </div>
    </div>

    <div class="ex-item online-content">
      <div class="ex-head" @click.stop="handleSwitch('edu')">
        <div class="ex-head-left">
          <i class="icon-image"></i>
          <h4>Education experience</h4>
        </div>
        <div class="ex-head-right">
          <a-button disabled>
            <template #icon>
              <UpOutlined />
            </template>
          </a-button>
          <a-button>
            <template #icon>
              <DownOutlined />
            </template>
          </a-button>
        </div>
      </div>
      <div class="ex-body online-from" :class="{'ex-close':openState.edu,'ex-body-padding':edu.length<1}">
        <edu
          :editorId="'edu_' + index"
          :work-data="item"
          :index="index"
          :com-name="'edu'"
          @datasave="getWorkData"
          @datadel="delWorkData" 
          v-for="(item, index) in edu"
          :key="index"
        ></edu>
      </div>
      <div class="ex-footer" @click.stop="addEdu" :class="{'ex-close':openState.edu}">
        <div class="footer-left">
          <PlusCircleFilled />Add Education experience
        </div>
        <div class="footer-right">
          <a-button disabled>
            <template #icon>
              <UpOutlined />
            </template>
          </a-button>
          <a-button>
            <template #icon>
              <DownOutlined />
            </template>
          </a-button>
        </div>
      </div>
    </div>

    <div class="ex-item online-content">
      <div class="ex-head" @click.stop="handleSwitch('setOf')">
        <div class="ex-head-left">
          <i class="icon-image"></i>
          <h4>A new set of</h4>
        </div>
        <div class="ex-head-right">
          <a-button disabled>
            <template #icon>
              <UpOutlined />
            </template>
          </a-button>
          <a-button>
            <template #icon>
              <DownOutlined />
            </template>
          </a-button>
        </div>
      </div>
      <div class="ex-body online-from" :class="{'ex-close':openState.setOf,'ex-body-padding':setOf.length<1}">
        <set-of
          :editorId="'setOf_' + index"
          :work-data="item"
          :index="index"
          :com-name="'setOf'"
          @datasave="getWorkData"
          @datadel="delWorkData" 
          v-for="(item, index) in setOf"
          :key="index"
        ></set-of>
      </div>
      <div class="ex-footer" @click.stop="addSetOf" :class="{'ex-close':openState.setOf}">
        <div class="footer-left">
          <PlusCircleFilled />Add A new set of
        </div>
        <div class="footer-right">
          <a-button disabled>
            <template #icon>
              <UpOutlined />
            </template>
          </a-button>
          <a-button>
            <template #icon>
              <DownOutlined />
            </template>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Work from "./components/work.vue";
import Edu from "./components/edu.vue"
import SetOf from "./components/setOf.vue"
import {
  PlusCircleFilled,
  UpOutlined,
  DownOutlined
} from "@ant-design/icons-vue";
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
          courseName: "",
          periodStart: null,
          periodEnd: null,
          Other: ""
        }
      ],
      others: [{}],
      setOf: [
        {
          newTitle:"",
          Other:""
        }
      ],
      openState:{
        work:false,
        edu:false,
        other:false,
        setOf:false
      }
    };
  },
  methods: {
    // 接受 组件 数据
    getWorkData(val, index,name) {
      switch(name) {
        case "work": 
          this.work.splice(index, 1, val);
          break;
        case "edu": 
          this.edu.splice(index, 1, val);
          break;
        case "other": 
          this.other.splice(index, 1, val);
          break;
        case "setOf": 
          this.setOf.splice(index, 1, val);
          break;
        default :
          break;
      }
      
    },
    // 删除 组件 work 数据
    delWorkData(index,name) {
      switch(name) {
        case "work": 
          this.work.splice(index, 1);
          break;
        case "edu": 
          this.edu.splice(index, 1);
          break;
        case "other": 
          this.other.splice(index, 1);
          break;
        case "setOf": 
          this.setOf.splice(index, 1);
          break;
        default :
          break;
      }
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
    },
    // 添加 edu 数据
    addEdu() {
      let obj = {
          schoolName: "",
          courseName: "",
          periodStart: null,
          periodEnd: null,
          Other: ""
        }
      this.edu.push(obj);
    },
    // 添加 setOf 数据
    addSetOf() {
      let obj = {
          newTitle:"",
          Other:""
        }
      this.setOf.push(obj);
    },
    // 打开关闭ex-body
    handleSwitch(val) {
      switch(val) {
        case "work": 
          this.openState.work = !this.openState.work;
          break;
        case "edu": 
          this.openState.edu = !this.openState.edu;
          break;
        case "other": 
          this.openState.other = !this.openState.other;
          break;
        case "setOf": 
          this.openState.setOf = !this.openState.setOf;
          break;
        default :
          break;
      }
    }
  },
  components: {
    PlusCircleFilled,
    UpOutlined,
    DownOutlined,
    Work,Edu,SetOf
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
  margin-bottom: 30px;
  flex-direction: column;
  padding: 0;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  .ex-head {
    padding: 14px 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .ex-head-left {
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
    .ex-head-right {
      .ant-btn {
        margin-left: 16px;
        border-radius: 4px;
      }
    }
    
  }

  .ex-body {
    border-top: 1px solid #dee4e7;
    padding: 20px 62px;
    overflow: hidden;
  }
  .ex-body-padding {
    padding: 0;
  }
  .ex-footer {
    background-color: #e8e8e8;
    padding: 8px 16px 8px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .footer-left {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #7c889c;
      .anticon  {
        font-size: 26px;
        margin-right: 14px;
        color: #37bbd1;
      }
    }
    .footer-right {
      display: none;
      .ant-btn {
        margin-left: 16px;
        border-radius: 4px;
      }
    }
  }

  .ex-close {
    display: none;
    padding: 0;
  }
}
</style>
