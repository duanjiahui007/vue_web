<template>
  <div class="model">
    <div class="model-content">
      <h4 class="topic">Resume template library</h4>
      <p class="level">Choose the right resume template for you</p>
      <div class="model-eg">
        <div class="item" v-for="(items, index) in modelData" :key="index">
          <div class="model-image" :class="{ 'model-image-select': items.buy }">
            <img :src="items.image" loading="lazy" />
            <div class="tip">Purchased</div>
            <div class="use-template">
              <a-button
                class="useModelBtn"
                shape="round"
                @click.stop="useModel(items.buy)"
                >Use Template</a-button
              >
            </div>
          </div>
          <div class="model-tip">
            Medical Class
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/home/model/01.png";
import image2 from "@/assets/images/home/model/02.png";
import image3 from "@/assets/images/home/model/03.png";
import image6 from "@/assets/images/home/model/04.png";
import image4 from "@/assets/images/home/model/05.png";
import image5 from "@/assets/images/home/model/01.png";
export default {
  name: "model",
  data() {
    return {
      // image1,image2, image3,image4,image5,image6,
      modelData: [
        {
          image: image1,
          buy: false
        },
        {
          image: image2,
          buy: true
        },
        {
          image: image3,
          buy: false
        },
        {
          image: image4,
          buy: false
        },
        {
          image: image5,
          buy: false
        },
        {
          image: image6,
          buy: true
        }
      ]
    };
  },
  methods: {
    // 使用模板
    useModel(bool) {
      if (bool) {
        this.$router.push("online");
      } else {
        this.$model.confirm({
          title: "Templates need to be purchased before use!",
          content: "Do you want to buy it?",
          okText: "Yes",
          cancelText: "No",
          onOk() {
            // 去购买页
            console.log(bool);
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.model {
  background-image: url("../../assets/images/us/usBj.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;
  margin-top: -20px;
  padding-top: 0.260417rem;
  padding-bottom: 0.3125rem;
  .model-content {
    width: 75%;
    margin: 0 auto;
    .model-eg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.667rem;
      flex-wrap: wrap;
      .item {
        flex-basis: 29%;
        border-radius: 0.52083rem;
        background-color: #ffffff;
        padding: 8px;
        border-radius: 6px;
        margin-bottom: 0.408333rem;
        .model-image {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          > img {
            width: 100%;
          }
          .tip {
            position: absolute;
            right: 0;
            top: 0;
            border-bottom-left-radius: 0.1875rem;
            background-color: #34b8cc;
            padding: 0.072917rem;
            font-size: 0.083333rem;
            color: #ffffff;
            cursor: pointer;
            display: none;
          }
          .use-template {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            top: 0;
            left: 0;
            background-color: rgba(249, 249, 249, 0.8);
            display: none;
            .useModelBtn {
              background-image: linear-gradient(
                -88deg,
                #33a9c1 0%,
                #7ad1e0 99%
              );
              border-color: #37bbd1;
              height: 0.286458rem;
              min-height: 32px;
              width: 60%;
              font-size: 0.09375rem;
              color: #ffffff;
              margin: auto;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
            }
            .useModelBtn:hover,
            .useModelBtn:focus {
              background-image: linear-gradient(
                -88deg,
                #33a9c1 0%,
                #7ad1e0 99%
              );
              border-color: #4dd1e9;
            }
            .useModelBtn:active {
              background-color: #2bb0c7;
              border-color: #2bb0c7;
            }
          }
          &:hover .use-template {
            display: block;
          }
        }
        .model-image-select {
          .tip {
            display: block;
          }
        }
        .model-tip {
          font-size: 14px;
          padding: 0.072917rem 0 0;
          text-align: center;
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .model {
    .model-content {
      width: 100%;
      .model-eg {
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        .item {
          flex-basis: 100%;
          .model-image {
            .tip {
              padding: 0.2133rem;
              font-size: 0.26rem;
            }
            .use-template {
              .useModelBtn {
                font-size: 0.28rem;
              }
            }
          }
          .model-tip {
            padding: 0.186rem 0 0.16rem;
            font-size: 0.24rem;
          }
        }
      }
    }
  }
}
</style>
