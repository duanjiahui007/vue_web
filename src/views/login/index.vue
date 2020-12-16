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
            <a-button
              type="primary"
              shape="round"
              :loading="loading"
              class="NextBtn"
              >continue</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <div class="line"><span>Other Ways</span></div>
      <div class="login-mode">
        <div class="btnLink">
          <i class="JS JS--twitter"></i> <span>Twitter</span>
        </div>
        <div class="btnLink">
          <i class="JS JS-facebooBig"></i> <span>Facebook</span>
        </div>
        <div class="btnLink">
          <i class="JS JS-linkedin"></i><span>Linkedin</span>
        </div>
        <p>
          By signing up, you agree to our terms of service, privacy policy and
          email
        </p>
      </div>
      <div class="min-login-mode">
        <div class="min-mode-btn">
          <div class="btnLink"><i class="JS JS--twitter"></i></div>
          <div class="btnLink"><i class="JS JS-facebooBig"></i></div>
          <div class="btnLink"><i class="JS JS-linkedin"></i></div>
        </div>
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
      erTip: `If you do not already have an account, please <a href="#/signUp" style="color:#37bbd1;">sign up</a> now `,
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
  flex-grow: 1;
  .login-content {
    width: 75%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0.208333rem 0.3125rem 1.4rem;
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
      > p {
        font-size: 0.072917rem;
        color: #7c889c;
        font-family: "Arial";
        margin-bottom: 0.177083rem;
        > a {
          color: #08cdee;
        }
      }
      .form-box {
        padding: 0 0.9375rem 0 0.25rem;
        box-sizing: border-box;
        .ant-form-item {
          margin-bottom: 0.125rem;
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
      justify-content: flex-start;
      box-sizing: border-box;
      padding-top: 0.677083rem;
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
        padding-left: 0.104167rem;
        margin-top: 0.208333rem;
        font-size: 0.09375rem;
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
    .min-login-mode {
      display: none;
    }
    .line {
      display: none;
    }
  }
}
@media screen and (max-width: 1200px) {
  .login .login-content {
    .login-mode {
      padding-top: 0.88rem;
      .btnLink {
        width: 1.3rem;
        height: 0.3rem;
        padding-left: 0.267rem;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .login {
    padding-top: 0;
    padding-bottom: 3.333rem;
    .login-content {
      width: 100%;
      border-radius: 0;
      background-image: linear-gradient(180deg, #b7f3f3, #e7f5f6, #f4f5f7);
      flex-direction: column;
      padding: 0.533rem;
      padding-bottom: 0;
      > div {
        flex-basis: 100%;
      }
      .login-data {
        h4 {
          font-size: 0.45rem;
          margin-bottom: 0.2933rem;
        }
        p {
          font-size: 0.1866rem;
          margin-bottom: 0.8rem;
        }
        .form-box {
          padding: 0 1.2rem;
          /deep/.ant-form-item-label {
            label {
              font-size: 0.24rem;
            }
          }
          .ant-form-item .ant-form-item-control {
            .ant-input-affix-wrapper {
              line-height: 0.8rem;
              /deep/.ant-input {
                font-size: 0.2133rem;
              }
            }
          }
          .btnItem {
            margin-bottom: 0;
            /deep/.ant-btn-round {
              height: 0.8rem;
              width: 100%;
              border-radius: 0.133rem;
              font-size: 0.32rem;
            }
          }
        }
      }
      .login-mode {
        display: none;
      }
      .line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.21333rem;
          font-weight: bolder;
          flex-shrink: 0;
          color: #828282;
        }
        &::before,
        &::after {
          content: "";
          height: 1px;
          background-color: #a1a0a0;
          display: block;
          width: 40%;
        }
      }
      .min-login-mode {
        display: block;
        padding: 0 1.6rem;
        background-image: url("../../assets/images/sign/bj.png");
        background-position: center bottom;
        background-size: 100%;
        background-repeat: no-repeat;
        padding-bottom: 1rem;
        padding-top: 0.05rem;
        margin-bottom: 0;
        .min-mode-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.2666rem;
          .btnLink {
            margin: 0 0.4rem;
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 50%;
            border: 1px solid #83bfc9;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 0.2666rem;
            }
          }
        }
        p {
          line-height: 0.346rem;
          color: #b5babf;
        }
      }
    }
  }
}
</style>
