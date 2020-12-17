<template>
  <div class="">
    <a-form :model="dataValue" layout="vertical" class="ex-body-form form-box ">
      {{ index }}
      <div class="ex-body-left">
        <a-form-item label="Company name">
          <a-input v-model:value="dataValue.companyName"></a-input>
        </a-form-item>
        <a-form-item label="Position duration">
          <a-input v-model:value="dataValue.duration"></a-input>
        </a-form-item>
        <a-form-item label="Employment period" class="time-slot">
          <a-date-picker
            v-model:value="dataValue.periodStart"
            :disabled-date="disabledStartDate"
            format="YYYY-MM-DD "
            valueFormat="YYYY-MM-DD"
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
        <a-form-item label="Job description">
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
  name: "work",
  props: {
    editorId: {
      type: String,
      default: "editor_i"
    },
    index: {
      type: Number,
      default: null
    },
    workData: {
      type: Object,
      default: function() {
        return {
          companyName: "",
          duration: "",
          periodStart: null,
          periodEnd: null,
          jobOther: ""
        };
      }
    }
  },
  data() {
    return {
      editor: null,
      dataValue: {
        companyName: "",
        duration: "",
        periodStart: null,
        periodEnd: null,
        jobOther: ""
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
    this.editor.txt.html(this.workData.jobOther);
    this.dataValue = this.workData;
  },
  updated() {
    this.dataValue = this.workData;
  },
  methods: {
    // 时间联动
    disabledStartDate(startValue) {
      const endValue = this.dataValue.periodEnd;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.dataValue.periodStart;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    // 删除
    handleDel() {
      this.$emit("datadel", this.index);
    },
    // 保存
    handleSave() {
      this.dataValue.jobOther = this.editor.txt.html();
      this.$emit("datasave", this.dataValue, this.index);
    }
  },
  computed: {
    creatEditor() {
      return `<div id=${this.editorId} ></div>`;
    }
  },
  watch: {
    index(newdata, olddata) {
      console.log(newdata, olddata);
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
