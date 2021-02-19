<template>
  <div class="online-content" v-if="true">
    <div class="online-from online-count">
      <a-form
        layout="vertical"
        ref="basicFormL"
        :model="formBasic"
        :rules="basicRules"
        class="form-box form-box-left"
      >
        <a-form-item label="Name" name="lastName" class="itemName">
          <a-input v-model:value="formBasic.lastName" />
          <a-input v-model:value="formBasic.firstName" />
        </a-form-item>
        <a-form-item label="Email" name="email">
          <a-input v-model:value="formBasic.email" />
        </a-form-item>
        <a-form-item label="Telephone">
          <a-input v-model:value="formBasic.phone" />
        </a-form-item>
        <a-form-item label="Personal Introduction">
          <div id="editor2"></div>
        </a-form-item>
      </a-form>
    </div>
    <div class="online-from online-count">
      <a-form
        layout="vertical"
        ref="basicFormR"
        :model="formBasic"
        :rules="basicRules"
        class="form-box form-box-right"
      >
        <a-form-item label="Name" name="Birthday">
          <a-date-picker v-model:value="formBasic.birthday" />
        </a-form-item>
        <a-form-item label="Place of birth">
          <a-input v-model:value="formBasic.birth" />
        </a-form-item>
        <a-form-item label="Place of residence">
          <a-input v-model:value="formBasic.residence" />
        </a-form-item>
        <a-form-item label="Nationality">
          <a-input v-model:value="formBasic.national" />
        </a-form-item>
        <a-form-item label="Personal homepage">
          <a-input v-model:value="formBasic.uploadFile" @blur="setHttp" />
          <!-- 可拆分组件 -->
          <div class="homePage">
            <div
              class="pageHttp"
              v-for="(item, index) in dataHttp"
              :key="index"
            >
              <div class="pageValue">
                <LinkOutlined /><a :href="item.value" target="_blank">{{
                  item.value
                }}</a>
              </div>
              <CloseOutlined @click.stop="delHttpData(index)" />
            </div>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <div class="online-next">
      <a-button
        :loading="loading"
        shape="round"
        class="defaultBtn"
        @click.stop="last"
        v-if="isVisted != 'isLast'"
        >Last step</a-button
      >
      <a-button
        type="primary"
        :loading="loading"
        shape="round"
        class="NextBtn"
        @click.stop="next"
        v-if="isVisted != 'isNext'"
        >Next step</a-button
      >
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import I18next from "i18next";
import { LinkOutlined, CloseOutlined } from "@ant-design/icons-vue";

export default {
  name: "basic",
  props: ["Num"],
  data() {
    return {
      loading: false,
      // 阶段二
      formBasic: {
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        introduction: "",
        birthday: "",
        birth: "",
        residence: "",
        national: "",
        uploadFile: ""
      },
      // 阶段二 网址数据
      dataHttp: [{ value: "http://10.158.125.20:8261" }],
      basicRules: {
        lastName: [
          { required: true, message: "Please input Name", trigger: "blur" }
        ],
        firstName: [
          { required: true, message: "Please input Name", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "Please enter email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter the correct email address",
            trigger: ["blur", "change"]
          }
        ],
        introduction: [
          {
            required: true,
            message: "Please fill in the personal introduction",
            trigger: "blur"
          }
        ]
      },
      // 富文本编辑
      editorTwo: null
    };
  },
  mounted() {
    this.editorTwo = new E("#editor2");
    this.editorTwo.config.lang = "en";
    this.editorTwo.config.zIndex = 2;
    this.editorTwo.i18next = I18next;
    this.editorTwo.config.menus = ["bold", "italic", "underline", "list"];
    this.editorTwo.config.showFullScreen = false;
    this.editorTwo.config.placeholder = "";
    this.editorTwo.create();
  },
  methods: {
    // 生成网址
    setHttp() {
      let val = this.formBasic.uploadFile;
      this.formBasic.uploadFile = "";
      if (val) {
        let obj = {};
        obj.value = val;
        this.dataHttp.push(obj);
      }
    },
    delHttpData(index) {
      this.dataHttp.splice(index, 1);
    },
    last() {
      this.$emit("last-step");
    },
    next() {
      this.$emit("next-step");
    }
  },
  computed: {
    isVisted() {
      if (this.Num == 1) {
        return "isLast";
      } else if (this.Num == 6) {
        return "isNext";
      } else {
        return null;
      }
    }
  },
  components: {
    LinkOutlined,
    CloseOutlined
  },
  beforeUnmount() {
    this.editorTwo.destroy();
    this.editorTwo = null;
  }
};
</script>

<style lang="less" scoped>
@import "./less/public.less";
// 可拆分组件
.homePage {
  padding-top: 0.09375rem;
  display: flex;
  flex-wrap: wrap;
  > div {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .pageHttp {
    margin: 0 6px;
    margin-bottom: 10px;
    .pageValue {
      display: inline-block;
      padding: 6px;
      border-radius: 4px;
      background-color: #eff1f1;
      line-height: 20px;
      margin-right: 4px;
      span {
        color: #1d9bb1;
        font-size: 16px;
        vertical-align: top;
        &:first-child {
          margin: 0 6px;
          font-size: 18px;
        }
      }
      a {
        color: #1d9bb1;
        font-size: 16px;
      }
    }
    > span {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      font-size: 24px;
      color: #ffffff;
      background-color: #d9dbde;
      line-height: 36px;
      vertical-align: bottom;
    }
  }
}
</style>
