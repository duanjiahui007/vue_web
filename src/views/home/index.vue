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
          <div class="play-txt">Create your resume online </div>
          <div class="play-btn"> <i class="JS JS-into"></i></div>
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
  </div>
</template>
<script>
import grass from "@/assets/images/home/grass.png";
import cloud from "@/assets/images/home/cloud.png";
import book from "@/assets/images/home/book.png";
export default {
  name: "home",
  data() {
    return { grass, cloud, book };
  }
};
</script>

<style scoped lang="less">
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
      margin-bottom:0.3125rem;
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
      height:0.328125rem;
      border-radius: 0.161458rem;
      background-image: linear-gradient(-88deg, #33a9c1 0%, #7ad1e0 99%);
      box-sizing: border-box;
      padding: 0 0.052083rem 0 0.15625rem;
      display:flex;
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
        align-items:center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: .4rem;
  padding-bottom: .266rem;
  background-image: radial-gradient( circle at center, #e3f1f1 23%, #caf8f7 100% );
  overflow: hidden;
  .min-ban-play {
    display: flex;
    width: 4rem;
    height: .88rem;
    border-radius: .44rem;
    padding-left: .4rem;
    padding-right: .0667rem;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(-88deg, #33a9c1 0%, #7ad1e0 99%);
    position: relative;
    z-index: 6;
    .min-play-txt{
      font-size:.24rem;
      font-family: Arial;
      color: #fefeff;
    }
    .min-play-btn {
      width: .7466rem;
      height: .7466rem;
      border-radius: .3733rem;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: #39a4b7;
        font-size: .266rem;
      }
    }
  }
  &::before,&::after{
    content: "";
    position: absolute ;
    width: 80%;
    height: 120%;
    top: 0;
    z-index: 3;
    background-color: #ffffff;
    border-radius: 50% 50% 0 0;
  }
  &::before {
    left: 0;
  }
   &::after {
     right: 0;
   }
  
}

@media screen and (max-width: 1024px) {
  .banner { background-image: radial-gradient( circle at center, #e3f1f1 23%, #caf8f7 100% ); }
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
}
@media screen and (max-width: 750px) {
  .banner {
    height:4.533rem;
    padding-top: 0.933rem;
    .grass {
      height: 0.975rem;
      bottom: .64rem;
    }
    .figure{
      bottom: .64rem;
      .cloud {
        height: 0.79167rem;
        margin-right: .66rem;
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
