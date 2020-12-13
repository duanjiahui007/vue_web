<template>
  <head-nav class="sign-header" :sign="true"></head-nav>
  <div class="login">
    <div class="login-content">
      <div class="login-data">
        <h4>{{ title }}</h4>
        <p v-html="erTip"></p>
        <a-form layout="vertical" :model="form" class="form-box">
          <a-form-item label="ID/Email">
            <a-input
              v-model:value="form.email"
              placeholder="email@168.com"
              allowClear
            />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password v-model:value="form.pwd" allowClear />
          </a-form-item>
          <a-form-item class="btnItem">
            <a-button type="primary" shape="round" :loading="loading"
              >continue</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <div class="login-mode">
        <div class="btnLink"><i class="JS JS--twitter"></i> Twitter</div>
        <div class="btnLink"><i class="JS JS-facebooBig"></i>Facebook</div>
        <div class="btnLink"><i class="JS JS-linkedin"></i>Linkedin</div>
        <p>
          By signing up, you agree to our terms of service, privacy policy and
          email
        </p>
      </div>
    </div>
  </div>
  <footer-bar class="sign-footer"></footer-bar>
</template>

<script>
import HeadNav from "@/components/NavBar/index";
import FooterBar from "@/components/footerBar/index.vue";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        pwd: ""
      },
      title: "Welcome to Log on",
      erTip: `If you do not already have an account, please <a href="#/signUp">sign up</a> now `,
      loading: false
    };
  },
  components: {
    HeadNav,
    FooterBar
  }
};
</script>

<style lang="less" scoped>
.sign-header {
  box-shadow: none;
}
.sign-footer {
  padding-top: 1.578125rem;
  background-image: url("../../assets/images/home/footer/footer-bj-other.png");
  background-color: transparent;
  position: absolute;
  z-index: 40;
  bottom: 0;
  left: 0;
  width: 100%;
}
.login {
  background-color: #f3f5f5;
  padding-top: 20px;
  .login-content {
    width: 75%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0.208333rem 0.3125rem 3.088542rem;
    border-radius: 8px;
    display: flex;
    > div {
      flex-basis: 50%;
      margin-bottom: 0.416667rem;
    }
    .login-data {
      h4 {
        font-size: 0.166667rem;
        line-height: 0.4375rem;
        color: #172945;
        font-family: "Georgia";
      }
      p {
        font-size: 0.072917rem;
        color: #7c889c;
        font-family: "Arial";
        margin-bottom: 0.177083rem;
        a {
          color: #08cdee;
        }
      }
      .form-box {
        padding: 0 0.9375rem 0 0.25rem;
        box-sizing: border-box;
        .ant-form-item {
          .ant-form-item-control {
            .ant-input-affix-wrapper {
              background-color: #eff1f1;
              line-height: 0.260417rem;
              /deep/.ant-input {
                background-color: #eff1f1;
                font-size: 16px;
              }
            }
          }
        }
        .btnItem {
          margin-bottom: 0;
          /deep/.ant-form-item-control {
            text-align: center;
          }
        }
      }
    }
    .login-mode {
      padding: 0 0.416667rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-image: url("../../assets/images/sign/bj.png");
      background-position: right bottom;
      background-size: 100%;
      background-repeat: no-repeat;
      .btnLink {
        border-radius: 50px;
        border: 1px solid #83bfc9;
        width: 0.9375rem;
        height: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 7%;
        margin-top: 0.208333rem;
        i {
          font-size: 20px;
          margin-right: 0.052083rem;
          color: #3c5a99;
        }
      }
      p {
        font-size: 0.083333rem;
        line-height: 0.125rem;
        color: #b5babf;
        font-family: "Arial";
        padding-right: 0.416667rem;
        margin-top: 0.208333rem;
      }
    }
  }
}
@media screen and (max-width: 1400px) {
}
</style>
