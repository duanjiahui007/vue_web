<template>
  <div class="homePage">
    <!-- 广告图 -->
    <div class="banner">
      <img :src="grass" class="grass" alt="grass" />
      <div class="figure">
        <img :src="cloud" alt="cloud" class="cloud" />
        <img :src="book" alt="book" class="book" />
      </div>
      <div class="content">
        <div class="banner-count">
          <div class="egg">
            <span>11,112</span>
            <em>Collection</em>
          </div>
          <i class="spot"></i>
          <div class="egg">
            <span>110,112</span>
            <em>Downloads</em>
          </div>
          <i class="spot"></i>
          <div class="egg">
            <span>125,112</span>
            <em>Productions</em>
          </div>
        </div>
        <div class="banner-conent">
          All that's missing from your successful life is a perfect resume
        </div>
        <div class="banner-Subtitle">
          <p>Small white novice, high salary necessary</p>
          <p>This is where the success story begins</p>
        </div>
        <div class="banner-play">
          <div class="play-txt">Create your resume online</div>
          <div class="play-btn"><i class="JS JS-into"></i></div>
        </div>
      </div>
    </div>
    <!-- 广告图 移动端扩展 -->
    <div class="min-banner">
      <div class="min-ban-play">
        <div class="min-play-txt">Create your resume online</div>
        <div class="min-play-btn"><i class="JS JS-into"></i></div>
      </div>
    </div>
    <!-- 模板展示 -->
    <div class="model-show">
      <div class="model-title">
        <div class="topic">Hot resume model</div>
        <div class="level">Massive template one-click application</div>
      </div>
      <div class="model-content model-big">
        <div class="model-swiper">
          <swiper
            :slides-per-view="5"
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            
           

          </swiper>
        </div>
      </div>
       <div class="model-content model-large">
        <div class="model-swiper">
          <swiper
            :slides-per-view="4"
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content">
                  <img :src="model" />
                </div>
                <div class="items-foot">
                  <div class="item"><i class="JS JS-stare"></i> <span>2552</span></div>
                  <div class="item"><i class="JS JS-download"></i> <span>2552</span></div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="model-move">
        <div class="move">read more >>></div>
      </div>
    </div>
    <!-- 模板移动版 迷你 -->
  </div>
</template>
<script>
import grass from "@/assets/images/home/grass.png";
import cloud from "@/assets/images/home/cloud.png";
import book from "@/assets/images/home/book.png";
import model from "@/assets/images/home/model/01.png"
import "swiper/swiper.less";
import "swiper/components/effect-fade/effect-fade.less";
import "swiper/components/navigation/navigation.less";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Navigation]);

export default {
  name: "home",
  data() {
    return { 
      grass, cloud, book, model
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    }
  }
};
</script>

<style scoped lang="less">
// 广告图
.banner {
  width: 100%;
  box-sizing: border-box;
  height: 4.635417rem;
  background-image: url("../../assets/images/home/banner.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 0.864583rem;
  padding-top: 0.625rem;
  .grass {
    height: 0.9375rem;
    position: absolute;
    bottom: 0.46875rem;
    left: 0;
    z-index: 0;
  }
  .figure {
    position: absolute;
    right: 0;
    bottom: 0.416667rem;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .cloud {
      height: 0.729167rem;
      margin-right: 50px;
    }
    .book {
      height: 2.369792rem;
    }
  }
  .content {
    flex-basis: 40%;
    height: 100%;
    position: relative;
    z-index: 2;
    overflow: hidden;
    .banner-count {
      display: inline-block;
      align-items: center;
      border: 1px solid #c1ccd2;
      border-radius: 30px;
      padding: 0.104167rem 0.208333rem;
      white-space: nowrap;
      margin-bottom: 30px;
      .egg {
        font-size: 0.09375rem;
        display: inline-block;
        span {
          font-size: 0.09375rem;
          color: #eaaa26;
        }
        em {
          font-size: 0.083333rem;
          color: #a7b3bc;
        }
      }
      .spot {
        height: 2px;
        width: 2px;
        display: inline-block;
        background-color: #59687c;
        margin: 4px 5px;
      }
    }
    .banner-conent {
      font-size: 0.291667rem;
      line-height: 0.447917rem;
      word-wrap: break-word;
      color: #162a45;
      margin-bottom: 0.15625rem;
      font-family: "Georgia";
    }
    .banner-Subtitle {
      margin-bottom: 0.3125rem;
      p {
        color: rgb(124, 136, 156);
        font-size: 0.104167rem;
        margin-bottom: 0.104167rem;
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
    .banner-play {
      width: 1.510417rem;
      height: 0.328125rem;
      border-radius: 0.161458rem;
      background-image: linear-gradient(-88deg, #33a9c1 0%, #7ad1e0 99%);
      box-sizing: border-box;
      padding: 0 0.052083rem 0 0.15625rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .play-txt {
        color: #ffffff;
        font-size: 0.083333rem;
      }
      .play-btn {
        height: 0.260417rem;
        width: 0.260417rem;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        i {
          font-size: 0.104167rem;
          color: #39a4b7;
        }
      }
    }
  }
}
.min-banner {
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  padding-top: 0.75rem;
  padding-bottom: 0.266rem;
  overflow: hidden;
  .min-ban-play {
    display: flex;
    width: 4rem;
    height: 0.88rem;
    border-radius: 0.44rem;
    padding-left: 0.4rem;
    padding-right: 0.0667rem;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(-88deg, #33a9c1 0%, #7ad1e0 99%);
    position: relative;
    z-index: 6;
    .min-play-txt {
      font-size: 0.24rem;
      font-family: Arial;
      color: #fefeff;
    }
    .min-play-btn {
      width: 0.7466rem;
      height: 0.7466rem;
      border-radius: 0.3733rem;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: #39a4b7;
        font-size: 0.266rem;
      }
    }
  }
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    background-image: url("../../assets/images/home/min-btn-bg.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top center;
  }
}
// 模板展示
.model-show {
  padding-top: 0.15625rem;
  padding-bottom: 0.364583rem;
  background-image: url("../../assets/images/home/model-bg.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 120% 100%;
  .model-title {
    margin-bottom: 0.416667rem;
  }
  .model-content {
    position: relative;
    padding-bottom: 60px;//
    .model-swiper {
      width: 95%;
      margin: 0 auto;
      position: relative;
      /deep/.swiper-container {
         padding: 0 0.39rem ;
         &::before,&::after{
           content:'';
           position: absolute;
           width: 0.39rem;
           height: 100%;
           background-color: #f5f6f8;
          //  background-image: url("../../assets/images/home/model-bg.png");
           top: 0;
           z-index: 3;
         }
         &::before{
           left:0;
           background-position: left;
         }
         &::after{
           right:0;
           background-position: right center;
         }
        .swiper-button-prev,.swiper-button-next{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 0.28125rem;
          height: 0.28125rem;
          background-color: #f3f5f5;
          border-radius: 50%;
          
        }
        .swiper-button-prev{
          left: 5px;
          transform: rotateZ(180deg);
          box-shadow:0 -5px 7px 1px #d0d0d0;
        }
        .swiper-button-next{
          right:5px;
          box-shadow:0 5px7px 1px #d0d0d0 ;
        }
        .swiper-button-prev::after,.swiper-button-next::after{
          content:"\e602";
          font-family: "JS";
          font-size: 0.09375rem;
          color: #6b6d6f;
        }
        .swiper-items{
          width:1.510417rem;
          height: 2.34375rem;
          overflow: hidden;
          margin: 0 auto;
          padding: 0.104167rem;
          background-color: #f5f7f7;
          border: 1px solid #d1d1d7;
          border-radius: 10px;
          box-sizing: border-box;
          .items-tip {
            i {
              font-size:0.125rem;
              color: #fd4141;
            }
            span {
              font-size: 0.083333rem;
              color: #343435;
            }
            display: flex;
            align-items: center;
          }
          .items-content {
            width: 100%;
            height: 1.692708rem;
            overflow: hidden;
            border-radius: 8px;
            padding-top: 0.10rem;
            // box-sizing: border-box;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .items-foot {
            margin-top:0.10rem;
            display: flex;
            >div{
              margin-right: 0.072917rem;
              font-size: 0.083333rem;
              color: #b2c7d4;
              i {
                color: #b2c7d4;
              }
            }
          }
        }
      }
        
    }
  }
  .model-large {
    display: none;
    .swiper-items {
      
    }
  }
  .model-move {
    padding-bottom: 0.208333rem;
    .move {
      width: 110px;
      height: 26px;
      font-size: 14px;
      padding: 0 10px;
      color: #848fa2;
      border: 1px solid #848fa2;
      border-radius: 0.104167rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
// 模板迷你版 
.model-min-show {

  
}

@media screen and (max-width:1200px){
  .model-show {
    .model-big {
      display: none;
    }
    .model-large {
      display: block;
    }
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    background-image: radial-gradient(
      circle at center,
      #e3f1f1 23%,
      #caf8f7 100%
    );
  }
}
@media screen and (max-width: 960px) {
  .banner {
    .content {
      .banner-count {
        display: none;
      }
      .banner-play {
        display: none;
      }
    }
  }
  .min-banner {
    display: flex;
  }
}
@media screen and (max-width: 750px) {
  .banner {
    height: 4.533rem;
    padding-top: 0.933rem;
    .grass {
      height: 0.975rem;
      bottom: 0.64rem;
    }
    .figure {
      bottom: 0.64rem;
      .cloud {
        height: 0.79167rem;
        margin-right: 0.66rem;
      }
      .book {
        height: 2.48792rem;
      }
    }
    .content {
      .banner-conent {
        font-size: 0.266667rem;
      }
      .banner-Subtitle {
        p {
          font-size: 0.16rem;
          transform: none;
        }
      }
    }
  }
}
</style>
