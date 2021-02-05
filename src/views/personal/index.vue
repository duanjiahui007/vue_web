<template>
  <div class="personal">
    <div class="user-basic">
      <div class="user-head">
        <a-spin
          size="large"
          :spinning="isUpload"
          wrapperClassName="loading-box"
        >
          <avatar-upload @files="avatarUp"></avatar-upload>
        </a-spin>
      </div>
      <div class="user-basic-txt">
        <div class="user-name">{{ basicData.name }}</div>
        <div class="user-email" v-if="!isEdit">{{ basicData.email }}</div>
        <div class="user-phone" v-if="!isEdit">{{ basicData.phone }}</div>
        <a-button
          class="user-edit"
          :loading="false"
          shape="round"
          v-if="!isEdit"
          @click.stop="startEdit"
        >
          <template #icon><EditOutlined /></template>
          Editor
        </a-button>
        <a-input
          v-model:value="basicData.email"
          ref="emailInput"
          v-if="isEdit"
          class="user-input user-email user-color"
        />
        <a-input
          v-model:value="basicData.phone"
          v-if="isEdit"
          class="user-input user-phone user-color"
        />
        <a-button
          class="user-edit resume-color"
          type="primary"
          :loading="false"
          shape="round"
          v-if="isEdit"
          @click.stop="startEdit"
          style="background-color:#f6bf4f; border-color:#f6bf4f;"
        >
          <template #icon>
            <i
              class="JS JS-save "
              style="display:inline-block;margin-right:8px"
            ></i
          ></template>
          Save
        </a-button>
      </div>
      <a-button type="primary" class="resume-btn resume-color"
        >My resume</a-button
      >
      <a-button class="resume-btn">My account</a-button>
    </div>
    <div class="user-resume">
      <form-work v-if="false"></form-work>
      <show-view v-if="false"></show-view>
      <show-views-two></show-views-two>
    </div>
  </div>
</template>

<script>
import { EditOutlined } from "@ant-design/icons-vue";
import avatar from "@/assets/images/personal/avatar.png";
// 头像上传
import avatarUpload from "@/components/avatarUpload/upload.vue";
// 模板列表
import formWork from "./children/formwork.vue";
// 模板预览1
import showView from "./children/showView.vue";
// 模板预览2
import showViewsTwo from './children/showViewTwo.vue';

export default {
  name: "personal",
  data() {
    return {
      // 头像
      avatar,
      isUpload: false,
      avatarShow: "",
      isEdit: false,
      basicData: {
        name: "weiiller Yesd",
        email: "8875441582@qq.com",
        phone: "87-993886638"
      }
    };
  },
  components: {
    EditOutlined,
    avatarUpload,
    formWork,
    showView,showViewsTwo
  },
  methods: {
    // 开始编辑个人信息
    startEdit() {
      this.isEdit = !this.isEdit;
    },
    // 保存编辑个人信息
    edit() {},
    // 上传图片
    avatarUp(val) {
      this.isUpload = true;
      console.log(val);
      setTimeout(() => {
        this.isUpload = false;
      }, 1000);
    }
  },
  watch: {
    isEdit(newData) {
      if (newData) {
        setTimeout(() => {
          this.$refs.emailInput.focus();
        }, 0);
      }
    }
  }
};
</script>

<style lang="less" scoped>
// 按钮样式
.resume-btn {
  height: 45px;
  font-size: 16px;
  margin-bottom: 20px;
  border-color: #33b9cf;
  color: #33b9cf;
  border-radius: 4px;
}
.resume-color {
  background-color: #37bbd1;
  border-color: #37bbd1;
  color: #ffffff;
}
// 输入框样式
.user-input {
  line-height: 1;
  font-size: 14px;
  background-color: transparent;
  border-radius: 0;
  border: none;
  background-color: #f3f5f5;
  outline: none;
  margin-bottom: 14px;
  text-align: center;
  border-radius: 4px;
}
.user-input:focus {
  box-shadow: none;
}
//
.personal {
  width: 82%;
  margin: 0 auto;
  display: flex;
  // 个人资料
  .user-basic {
    flex-basis: 23.3%;
    padding: 0.177083rem 0.177083rem 0.458333rem;
    background-color: #ffffff;
    border-radius: 0.041667rem;
    box-shadow: 0 0 0.020833rem 0.020833rem #f2f2f2;
    margin-right: 0.130208rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: min-content;
    .user-head {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 20px;
      position: relative;
      cursor: pointer;
      .loading-box {
        width: 100%;
        height: 100%;
        :deep(.ant-spin-container) {
          width: 100%;
          height: 100%;
        }
      }
    }
    .user-basic-txt {
      text-align: center;
      > div {
        text-align: center;
      }
      .user-name {
        color: #333333;
        font-size: 24px;
        line-height: 30px;
      }
      .user-email {
        color: #bbbbbb;
        font-size: 0.072917rem;
        line-height: 30px;
        font-size: 14px;
      }
      .user-phone {
        color: #bbbbbb;
        line-height: 30px;
      }
      .user-edit {
        margin: 0 auto 50px;
      }
      .user-color {
        color: #f6bf4f;
      }
    }
  }
  // 我的简历
  .user-resume {
    flex: 1;
  }
}
</style>
