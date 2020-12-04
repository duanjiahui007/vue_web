<template>
  <div class="homePage">
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
        <div class="banner-con">
        </div>
        <div class="banner-Subtitle"></div>
        <div class="banner-play"></div>
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
  }
  .figure {
    position: absolute;
    right: 0;
    bottom: 0.416667rem;
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
    flex-basis: 35%;
    height: 80%;
    .banner-count {
      display: inline-block;
      align-items: center;
      border: 1px solid #c1ccd2;
      border-radius: 30px;
      padding: 0.104167rem 0.208333rem;
      white-space: nowrap;
      .egg {
        font-size:0.083333rem;
        display: inline-block;
        span {
          color: #eaaa26;
        }
        em {
          color: #a7b3bc;
        }
      }
      .spot{
        height: 2px;
        width: 2px;
        display: inline-block;
        background-color: #59687c;
        margin: 4px 5px;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
}
</style>
