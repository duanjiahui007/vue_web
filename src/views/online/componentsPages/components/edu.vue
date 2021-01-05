<template>
  <div class="">
    <a-form :model="dataValue" layout="vertical" class="ex-body-form form-box ">
      <div class="ex-body-left">
        <a-form-item label="School name">
          <a-input v-model:value="dataValue.schoolName"></a-input>
        </a-form-item>
        <a-form-item label="Course name">
          <a-input v-model:value="dataValue.courseName"></a-input>
        </a-form-item>
        <a-form-item label="School time" class="time-slot">
          <a-date-picker
            v-model:value="dataValue.periodStart"
            :disabled-date="disabledStartDate"
            valueFormat="YYYY-MM-DD"
            format="YYYY-MM-DD "
            placeholder="Start"
          />
          <span class="dotted-line">---</span>
          <a-date-picker
            v-model:value="dataValue.periodEnd"
            :disabled-date="disabledEndDate"
            valueFormat="YYYY-MM-DD"
            format="YYYY-MM-DD"
            placeholder="End"
          />
        </a-form-item>
      </div>
      <div class="ex-body-right">
        <a-form-item label="Other description">
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
  name: "edu",
  props: {
    editorId: {
      type: String,
      default: "edu_i"
    },
    index: {
      type: Number,
      default: null
    },
    eduData: {
      type: Object,
      default: function() {
        return {
          schoolName: "",
          courseName: "",
          periodStart: null,
          periodEnd: null,
          Other: ""
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
        schoolName: "",
        courseName: "",
        periodStart: null,
        periodEnd: null,
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
    this.editor.txt.html(this.eduData.Other);
    this.dataValue = this.eduData;
  },
  updated() {
    this.dataValue = this.eduData;
    this.editor.txt.html(this.eduData.Other);
  },
  methods: {
    // 时间联动
    disabledStartDate(startValue) {
      const endValue = this.dataValue.periodEnd;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > new Date(endValue.replace(/-/g, "/"));
    },
    disabledEndDate(endValue) {
      const startValue = this.dataValue.periodStart;
      if (!endValue || !startValue) {
        return false;
      }
      return new Date(startValue.replace(/-/g, "/")) >= endValue.valueOf();
    },
    // 删除
    handleDel() {
      this.$emit("datadel", this.index, this.comName);
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
@import "../less/publicCom.less";
</style>
