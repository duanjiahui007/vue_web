<template>
  <div class="">
    <a-form :model="dataValue" layout="vertical" class="ex-body-form form-box ">
      <div class="ex-body-left">
        <a-form-item label="A new set of">
          <a-input v-model:value="dataValue.newTitle"></a-input>
        </a-form-item>
      </div>
      <div class="ex-body-right">
        <a-form-item label="Add new content">
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
  name: "setOf",
  props: {
    editorId: {
      type: String,
      default: "setOf_i"
    },
    index: {
      type: Number,
      default: null
    },
    setOfData: {
      type: Object,
      default: function() {
        return {
          newTitle: "",
          Other: ""
        };
      }
    },
    comName: {
      type:String,
      default:null
    }
  },
  data() {
    return {
      editor: null,
      dataValue: {
          newTitle: "",
          Other: ""
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
    this.editor.txt.html(this.setOfData.Other);
    this.dataValue = this.setOfData;
  },
  updated() {
    this.dataValue = this.setOfData;
    this.editor.txt.html(this.setOfData.Other);
  },
  methods: {
    // 删除
    handleDel() {
      this.$emit("datadel", this.index,this.comName);
    },
    // 保存
    handleSave() {
      this.dataValue.Other = this.editor.txt.html();
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
.ex-body-form {
  display: flex;
  justify-content: space-between;
  padding: 0;
  > div {
    flex-basis: 40%;
  }
  .time-slot {
    /deep/ .ant-form-item-children {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dotted-line {
        font-size: 26px;
        color: #bdbdbd;
      }
      .ant-calendar-picker {
        flex-basis: 40%;
        min-width: auto !important;
      }
    }
  }
  .ex-body-right {
    .btn {
      text-align: right;
      .ant-btn {
        margin: 0 10px;
      }
      .del-btn:hover,
      .del-btn:active,
      .del-btn:focus {
        color: #e74b4b;
        border-color: #e74b4b;
      }
      .save-btn:hover,
      .save-btn:active,
      .save-btn:focus {
        color: #1facb1;
        border-color: #1facb1;
      }
    }
  }
}
</style>
