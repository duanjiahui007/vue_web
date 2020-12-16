<template>
  <div class="connect-us">
    <div class="content-box">
      <h4 class="topic">Connect us</h4>
      <p class="level">Your recognition is our greatest success</p>
      <div class="content">
        <div class="item">
          <img :src="phone" />
          <div class="link-btn">86+18829887153</div>
        </div>
        <div class="item">
          <img :src="email" />
          <div class="link-btn">875418273@qq.com</div>
        </div>
        <div class="item">
          <img :src="gps" />
          <div class="link-btn">New York, us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phone from "@/assets/images/us/phone.png";
import email from "@/assets/images/us/email.png";
import gps from "@/assets/images/us/gps.png";
export default {
  name: "connectUs",
  data() {
    return {
      phone,
      email,
      gps
    };
  }
};
</script>

<style lang="less" scoped>
.connect-us {
  background-image: url("../../assets/images/us/usBj.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;
  margin-top: -20px;
  padding-top: 50.000064px;
  // padding-bottom: .2125rem;
  .content-box {
    width: 75%;
    margin: 0 auto;
    .content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 0.5625rem;
      padding-left: 50.000064px;
      padding-right: 50.000064px;
      .item {
        width: 272px;
        border-radius: 0.052083rem;
        background-color: #ffffff;
        padding: 42.24px 23.04px;
        transition: all 200ms ease-in-out;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: auto;
          margin-bottom: 105px;
        }
        .link-btn {
          background-color: #3badc3;
          text-align: center;
          border-radius: 9.999936px;
          font-size: 16px;
          color: #ffffff;
          padding: 8px 0;
        }
        &:hover {
          box-shadow: 0 0 28px 5px #ddd5d5;
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .connect-us {
    .content-box {
      width: 95%;
      .content {
        .item {
          width: 220px;
          img {
            margin-bottom: 80px;
          }
          .link-btn {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .connect-us {
    .content-box {
      width: 100%;
      .content {
        flex-direction: column;
        margin-bottom: 0.4rem;
        .item {
          width: 80%;
          flex-basis: auto;
          margin-bottom: 0.8rem;
          padding: 0.7rem 0.60417rem 0.8333rem;
          img {
            width: 2.3rem;
            height: 2.3rem;
            margin-bottom: 2rem;
          }
          .link-btn {
            font-size: 0.293rem;
            padding: 0.22rem 0;
          }
        }
      }
    }
  }
}
</style>
