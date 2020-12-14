<template>
  <div class="onlinePage">
    <div class="online-title">
      <time-axis :Num="Bnum"></time-axis>
    </div>

    <div class="online-content">
      <div class="online-from online-count">
        <h4>lets start from the beginning</h4>
        <p>
          <label class="ant-form-item-required"></label> Please be sure to fill
          in the required fields
        </p>
        <a-form
          layout="vertical"
          ref="formSub"
          :model="formData"
          :rules="rules"
          class="form-box"
        >
          <a-form-item label="Resumename" name="resumename">
            <a-input v-model:value="formData.resumename" allowClear />
          </a-form-item>
          <a-form-item label="Resume">
            <a-input v-model:value="formData.Resume" allowClear />
          </a-form-item>
        </a-form>
      </div>
      <div class="online-image online-count">
        <image-upload></image-upload>
      </div>
      <div class="online-next">
        <a-button
          type="primary"
          :loading="loading"
          shape="round"
          class="NextBtn"
          >Next step</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import TimeAxis from "./components/TimeAxis.vue";
import ImageUpload from "./components/uploadImage.vue";
export default {
  name: "onlinePage",
  data() {
    return {
      Bnum: 1,
      loading: false,
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
  methods: {},
  components: {
    TimeAxis,
    ImageUpload
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
.online-content {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0.260417rem 0.3125rem;
  padding-bottom: 0.833333rem;
  position: relative;
  display: flex;
  align-items: center;
  > .online-count {
    flex-basis: 50%;
  }
  .online-from {
    h4 {
      font-size: 0.166667rem;
      margin-bottom: 0.072917rem;
      color: #172945;
      line-height: 1;
    }
    p {
      font-size: 0.072917rem;
      color: #7c889c;
      margin-bottom: 0.260417rem;
    }
    .form-box {
      /deep/.ant-form-item label {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .online-next {
    position: absolute;
    bottom: 0.416667rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
