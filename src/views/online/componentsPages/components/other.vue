<template>
  <div class="">
    <a-form :model="dataValue" layout="vertical" class="ex-body-form form-box ">
      <div class="ex-body-left">
        <a-form-item label="Special Skill">
          <a-input v-model:value="dataValue.otherA"></a-input>
          <a-rate v-model:value="dataValue.otherValueA" />
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="dataValue.otherB"></a-input>
          <a-rate v-model:value="dataValue.otherValueB" />
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="dataValue.otherC"></a-input>
          <a-rate v-model:value="dataValue.otherValueC" />
        </a-form-item>
      </div>
      <div class="ex-body-right">
        <a-form-item label="Hobbies and interests">
          <div v-html="creatEditor" class="editorClass"></div>
        </a-form-item>
        <div class="btn">
          <a-button size="large" class="del-btn" @click.stop="handleDel">
            <template #icon><i class="JS JS-delete"></i></template>
            delete
          </a-button>
          <a-button size="large" class="save-btn" @click.stop="handleSave">
            <template #icon><i class="JS JS-save"></i></template>
            save
          </a-button>
        </div>
      </div>
    </a-form>
    <a-divider></a-divider>
  </div>
</template>

<script>
import E from "wangeditor";
import I18next from "i18next";
export default {
  name: "other",
  props: {
    editorId: {
      type: String,
      default: "other_i"
    },
    index: {
      type: Number,
      default: null
    },
    otherData: {
      type: Object,
      default: function() {
        return {
          otherA: "",
          otherValueA: 1,
          otherB: "",
          otherValueB: 1,
          otherC: "",
          otherValueC: 1,
          otherEg: ""
        };
      }
    },
    comName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      editor: null,
      dataValue: {
        otherA: "",
        otherValueA: 1,
        otherB: "",
        otherValueB: 1,
        otherC: "",
        otherValueC: 1,
        otherEg: ""
      }
    };
  },
  mounted() {
    this.editor = new E("#" + this.editorId);
    this.editor.config.lang = "en";
    this.editor.config.zIndex = 2;
    this.editor.i18next = I18next;
    this.editor.config.menus = ["bold", "italic", "underline", "list"];
    this.editor.config.showFullScreen = false;
    this.editor.config.placeholder = "";
    this.editor.create();
    this.editor.txt.html(this.otherData.otherEg);
    this.dataValue = this.otherData;
  },
  updated() {
    this.dataValue = this.otherData;
    this.editor.txt.html(this.otherData.otherEg);
  },
  methods: {
    // 删除
    handleDel() {
      this.$emit("datadel", this.index, this.comName);
    },
    // 保存
    handleSave() {
      this.dataValue.otherEg = this.editor.txt.html();
      this.$emit("datasave", this.dataValue, this.index, this.comName);
    }
  },
  computed: {
    creatEditor() {
      return `<div id=${this.editorId} ></div>`;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/public.less";
@import "../less/publicCom.less";
.ex-body-form {
  .ant-rate {
    font-size: 0.15625rem;
    color: #37bbd1;
    margin-left: 0.104167rem;
  }
  .ex-body-left {
    /deep/.ant-form-item-children {
      display: flex;
      align-items: center;
      ul {
        flex-shrink: 0;
      }
    }
  }
}
</style>
