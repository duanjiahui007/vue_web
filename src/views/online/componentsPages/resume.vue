<template>
  <div class="online-content" v-if="true">
    <div class="online-from online-count">
      <h4>lets start from the beginning</h4>
      <p>
        <label class="ant-form-item-required"></label> Please be sure to fill in
        the required fields
      </p>
      <a-form
        layout="vertical"
        ref="formSub"
        :model="formData"
        :rules="rules"
        class="form-box"
      >
        <a-form-item label="Resumename" name="resumename">
          <a-input v-model:value="formData.resumename" />
        </a-form-item>
        <a-form-item label="Resume">
          <div id="editor1"></div>
        </a-form-item>
      </a-form>
    </div>
    <div class="online-image online-count">
      <image-upload></image-upload>
    </div>
    <div class="online-next">
      <a-button type="primary" :loading="loading" shape="round" class="NextBtn"
        >Next step</a-button
      >
    </div>
  </div>
</template>

<script>
import ImageUpload from "../components/uploadImage.vue";
import E from "wangeditor";
import I18next from "i18next";
export default {
  name: "resume",
  data() {
    return {
      // 富文本编辑
      editor: null,
      // 按钮等待
      loading: false,
      // 阶段一
      formData: {
        resumename: "",
        Resume: ""
      },
      rules: {
        resumename: [
          {
            required: true,
            message: "Please input resumename",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    this.editor = new E("#editor1");
    this.editor.config.lang = "en";
    this.editor.config.zIndex = 2;
    this.editor.i18next = I18next;
    this.editor.config.menus = ["bold", "italic", "underline", "list"];
    this.editor.config.showFullScreen = false;
    this.editor.config.placeholder = "";
    this.editor.create();
  },
  components: {
    ImageUpload
  },
  beforeUnmount() {
    this.editor.destroy();
    this.editor = null;
  }
};
</script>

<style lang="less" scoped>
@import "./less/public.less";
</style>
