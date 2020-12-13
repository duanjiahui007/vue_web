<template>
  <head-nav class="sign-header" :sign="true"></head-nav>
  <div class="login">
    <div class="login-content">
      <div class="login-data">
        <h4></h4>
        <p></p>
        <a-button type="primary"> Primary</a-button>
        <a-form layout="horizontal" :model="form">
          <a-form-item label="ID/Email">
            <a-input v-model:value="form.email" />
          </a-form-item>
        </a-form>
      </div>
      <div class="login-mode"></div>
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
        email: "dd",
        pwd: ""
      }
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
    }
  }
}
@media screen and (max-width: 1400px) {
}
</style>
