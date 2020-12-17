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
  padding-top: 0.260417rem;
  padding-bottom: 0.3125rem;
  .content-box {
    width: 75%;
    margin: 0 auto;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.6667rem;
      .item {
        flex-basis: 29%;
        border-radius: 0.052083rem;
        background-color: #ffffff;
        padding: 0.260417rem 0.260417rem 0.208333rem;
        transition: all 200ms ease-in-out;
        img {
          width: 0.833333rem;
          height: 0.833333rem;
          border-radius: 50%;
          margin: auto;
          margin-bottom: 0.56875rem;
        }
        .link-btn {
          background-color: #3badc3;
          text-align: center;
          border-radius: 0.052083rem;
          font-size: 0.09375rem;
          color: #ffffff;
          padding: 0.104167rem 0;
        }
        &:hover {
          box-shadow: 0 0 28px 5px #ddd5d5;
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
        .item {
          width: 60%;
          flex-basis: auto;
          margin-bottom: 0.8rem;
          padding: 0.617rem 0.60417rem 0.8333rem;
          img {
            width: 2.3rem;
            height: 2.3rem;
            margin-bottom: 1.067rem;
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
