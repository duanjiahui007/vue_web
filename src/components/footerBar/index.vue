<template>
  <footer>
    <!-- 友情链接 -->
    <div class="links">
      <a href="#"><i class="JS JS-facebook"></i></a>
      <a href="#"><i class="JS JS-tuite"></i></a>
      <a href="#"><i class="JS JS-linked"></i></a>
      <a href="#"><i class="JS JS-instagram"></i></a>
      <a href="#"><i class="JS JS-pinterest"></i></a>
    </div>
    <div class="goPage">
      <router-link to="online" @click="touchDown" data-path="online"
        >online production</router-link
      >
      <router-link to="" @click="touchDown" data-path="model"
        >resource model</router-link
      >
      <router-link to="" @click="touchDown" data-path="personal"
        >personal center</router-link
      >
      <router-link to="" @click="touchDown" data-path="us"
        >connect us</router-link
      >
    </div>
    <div class="language">
      <i class="JS JS-diqiu"></i>
      <span>English</span>
    </div>
    <div class="copyright">
      <i class="JS JS-anquan"></i>
      <span>Property in copyright2020-2020 ASYWARE.cn</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerBar",
  data() {
    return {};
  },
  methods: {
    touchDown(event) {
      let ev = event.currentTarget || event.srcElement;
      this.$store.dispatch("nav/AsyncHeaderPath", ev.dataset.path);
    }
  }
};
</script>

<style lang="less" scoped>
footer {
  padding-top: 2.291667rem;
  padding-bottom: 0.260417rem;
  background: url("../../assets/images/home/footer/footer-bj.png") no-repeat;
  background-size: 100% 100%;
  > div {
    display: flex;
    justify-content: center;
    > a {
      display: block;
    }
  }
}
.links {
  margin-bottom: 0.208333rem;
  a {
    margin: 0 0.078125rem;
    i {
      font-size: 0.208333rem;
      color: #b4e5ed;
    }
  }
}
.goPage {
  margin-bottom: 0.260417rem;
  a {
    margin: 0 0.078125rem;
    font-size: 0.09375rem;
    font-family: Arial;
    color: #ffffff;
  }
}
.language,
.copyright {
  align-items: center;
  color: #8cd7e3;
  margin-bottom: 0.09375rem;
  i {
    font-size: 0.125rem;
    color: #8cd7e3;
    margin-right: 0.026042rem;
  }
  span {
    font-size: 0.083333rem;
  }
}
.copyright {
  margin-bottom: 0;
}

.sign-footer {
  .links {
    margin-bottom: 0.08rem;
    a {
      margin: 0 0.078125rem;
      i {
        font-size: 0.18rem;
        color: #b4e5ed;
      }
    }
  }
  .goPage {
    margin-bottom: 0.08rem;
    a {
      margin: 0 0.078125rem;
      font-size: 0.075rem;
      font-family: Arial;
      color: #ffffff;
    }
  }
  .language,
  .copyright {
    align-items: center;
    color: #8cd7e3;
    margin-bottom: 0.0475rem;
    i {
      font-size: 0.08rem;
      color: #8cd7e3;
      margin-right: 0.026042rem;
    }
    span {
      font-size: 0.063333rem;
    }
  }
  .copyright {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 960px) {
  footer {
    padding: 0.4rem 0 0.2933rem !important;
    background-image: none !important;
    background-color: #30b7cd !important;
    .links {
      margin-bottom: 0.2666rem !important;
      i {
        font-size: 0.5333rem !important;
        margin: 0 0.2rem !important;
      }
    }
    .goPage {
      display: none;
    }
    .language,
    .copyright {
      i {
        font-size: 0.333rem !important;
      }
      span {
        font-size: 0.22666rem !important;
      }
    }
  }
}
</style>
