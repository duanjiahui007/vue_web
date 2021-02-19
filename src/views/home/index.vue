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
        <div class="banner-play" @click.stop="GoOnline">
          <div class="play-txt">Create your resume online</div>
          <div class="play-btn"><i class="JS JS-into"></i></div>
        </div>
      </div>
    </div>
    <!-- 广告图 移动端扩展 -->
    <div class="min-banner">
      <div class="min-ban-play" @click.stop="GoOnline">
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
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
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
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-items">
                <div class="items-tip">
                  <i class="JS JS-hot"></i>
                  <span>template 1</span>
                </div>
                <div class="items-content" @click.stop="lookViews">
                  <img :src="model" />
                  <div class="min-mantle one"></div>
                  <div class="min-mantle two"></div>
                  <div class="mantle">
                    <div class="btn">View details</div>
                  </div>
                </div>
                <div class="items-foot">
                  <!-- <div class="item">
                    <i class="JS JS-stare"></i> <span>2552</span>
                  </div> -->
                  <div class="item">
                    <i class="JS JS-download"></i> <span>2552</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 模板移动版 迷你 -->
      <div class="model-min">
        <div class="model-items">
          <div class="items-img">
            <img :src="model" alt="" />
          </div>
          <div class="items-tip">
            Template 01
          </div>
          <div class="items-btn">
            <div class="btn">View details</div>
          </div>
        </div>
        <div class="model-items">
          <div class="items-img">
            <img :src="model" alt="" />
          </div>
          <div class="items-tip">
            Template 01
          </div>
          <div class="items-btn">
            <div class="btn">View details</div>
          </div>
        </div>
        <div class="model-items">
          <div class="items-img">
            <img :src="model" alt="" />
          </div>
          <div class="items-tip">
            Template 01
          </div>
          <div class="items-btn">
            <div class="btn">View details</div>
          </div>
        </div>
        <div class="model-items">
          <div class="items-img">
            <img :src="model" alt="" />
          </div>
          <div class="items-tip">
            Template 01
          </div>
          <div class="items-btn">
            <div class="btn">View details</div>
          </div>
        </div>
      </div>
      <div class="model-move">
        <router-link to="/other/model" class="move">read more >>></router-link>
      </div>
    </div>
    <!-- 用户反馈-联系我们 -->
    <div class="user-us-box">
      <!-- 用户反馈 -->
      <div class="user-back">
        <div class="user-image">
          <img :src="user" alt="" />
        </div>
        <div class="user-content">
          <div class="user-title">
            User feedback
            <div class="line"></div>
          </div>
          <div class="user-list">
            <div class="list-itme">
              <div class="item-img">
                <img :src="user1" alt="avter" />
                <i class="JS JS-msg"></i>
              </div>
              <div class="item-content">
                <h4>Aore</h4>
                <p>
                  This is the generator, it's really easy to use, especially
                  good!This is the generator, it's really easy to use,
                  especially good!
                </p>
              </div>
            </div>
            <div class="list-itme">
              <div class="item-img">
                <img :src="user2" alt="avter" />
                <i class="JS JS-msg"></i>
              </div>
              <div class="item-content">
                <h4>Aore</h4>
                <p>
                  This is the generator, it's really easy to use, especially
                  good!
                </p>
              </div>
            </div>
            <div class="list-itme">
              <div class="item-img">
                <img :src="user3" alt="avter" />
                <i class="JS JS-msg"></i>
              </div>
              <div class="item-content">
                <h4>Aore</h4>
                <p>
                  This is the generator, it's really easy to use, especially
                  good!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="contect-us">
        <div class="us-content">
          <div class="us-title">
            Connect us
            <div class="line"></div>
          </div>
          <div class="us-list">
            <div class="us-eg">
              <i class="JS JS-phone"></i>
              <span>86+55842265152</span>
            </div>
            <div class="us-eg">
              <i class="JS JS-email"></i>
              <span>86556448@168.com</span>
            </div>
            <div class="us-eg">
              <i class="JS JS-gps"></i>
              <span>NewYork, us </span>
            </div>
          </div>
          <div class="us-init" @click.stop="GoConnect">
            <div class="init-txt">Click into</div>
            <i class="JS JS-into"></i>
          </div>
        </div>
        <div class="us-image">
          <img :src="us" alt="" />
        </div>
      </div>
    </div>
    <!-- 移动端 用户反馈 -->
    <div class="min-user-us-box">
      <div class="title">
        <div class="topic">User feedback</div>
        <div class="level">Users' comments on us</div>
      </div>
      <div class="user-back">
        <div class="user-content">
          <div class="user-list">
            <div class="list-itme">
              <div class="item-img">
                <img :src="user1" alt="avter" />
                <i class="JS JS-msg"></i>
              </div>
              <div class="item-content">
                <h4>Aore</h4>
                <p>
                  This is the generator, it's really easy to use, especially
                  good!This is the generator, it's really easy to use,
                  especially good!
                </p>
              </div>
            </div>
            <div class="list-itme">
              <div class="item-img">
                <img :src="user2" alt="avter" />
                <i class="JS JS-msg"></i>
              </div>
              <div class="item-content">
                <h4>Aore</h4>
                <p>
                  This is the generator, it's really easy to use, especially
                  good!
                </p>
              </div>
            </div>
            <div class="list-itme">
              <div class="item-img">
                <img :src="user3" alt="avter" />
                <i class="JS JS-msg"></i>
              </div>
              <div class="item-content">
                <h4>Aore</h4>
                <p>
                  This is the generator, it's really easy to use, especially
                  good! This is the generator, it's really easy to use,
                  especially good! This is the generator, it's really easy to
                  use, especially good!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 制作功能 -->
    <div class="production">
      <div class="title">
        <div class="topic">Online resume production feature</div>
        <div class="level">Get ready for your next job</div>
      </div>
      <div class="prod-content">
        <div class="item">
          <div class="item-img">
            <img :src="copy1" alt="" />
          </div>
          <div class="item-mssage">
            <div class="item-tip">Change template with one key</div>
            <div class="item-cont">
              Massive template, one key can switch, different styles at will
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-img">
            <img :src="copy2" alt="" />
          </div>
          <div class="item-mssage">
            <div class="item-tip">automated composition</div>
            <div class="item-cont">
              Just fill in the basic information, the program can complete
              beautiful typesetting
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-img">
            <img :src="copy3" alt="" />
          </div>
          <div class="item-mssage">
            <div class="item-tip">The One-Click downloaded</div>
            <div class="item-cont">
              Complete the resume, one click download, print delivery convenient
              and fast
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import grass from "@/assets/images/home/grass.png";
import cloud from "@/assets/images/home/cloud.png";
import book from "@/assets/images/home/book.png";
import model from "@/assets/images/home/model/01.png";
import us from "@/assets/images/home/userUs/us.png";
import user from "@/assets/images/home/userUs/user.png";
// 头像
import user1 from "@/assets/images/home/userUs/av.jpg";
import user2 from "@/assets/images/home/userUs/avm.jpg";
import user3 from "@/assets/images/home/userUs/avt.jpg";
// 制作
import copy1 from "@/assets/images/home/production/copy1.png";
import copy2 from "@/assets/images/home/production/copy2.png";
import copy3 from "@/assets/images/home/production/copy3.png";

// 轮播图
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/effect-fade/effect-fade.less";
SwiperCore.use([Navigation]);

export default {
  name: "home",
  data() {
    return {
      grass,
      cloud,
      book,
      model,
      us,
      user,
      user1,
      user2,
      user3,
      copy1,
      copy2,
      copy3
    };
  },
  mounted() {},
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
    },
    // 点击模板
    lookViews(event) {
      let oldDom = document.querySelector(".items-content-check");
      if (oldDom) {
        oldDom.classList.remove("items-content-check");
      }
      let dom = event.currentTarget;
      dom.classList.add("items-content-check");
    },
    GoOnline() {
      this.$router.push("/other/online");
    },
    GoConnect() {
      this.$router.push("/other/us");
    }
  }
};
</script>

<style scoped lang="less">
// 按钮
.btn {
  padding: 0.078125rem 0.15625rem;
  font-size: 0.083333rem;
  color: #ffffff;
  border-radius: 0.260417rem;
  display: inline-block;
  flex-shrink: 0;
  filter: drop-shadow(0px 8px 2.5px rgba(255, 203, 91, 0.23));
  background-color: #ffc34b;
  &:hover {
    background-color: #ffcd6a;
  }
  &:active {
    transform: scale(0.96);
  }
}
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
    background-color: #f3f5f5;
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
    padding-bottom: 60px;
    .model-swiper {
      width: 95%;
      margin: 0 auto;
      position: relative;
      /deep/.swiper-container {
        padding: 0 0.39rem;
        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 0.39rem;
          height: 100%;
          background-color: #f5f6f8;
          //  background-image: url("../../assets/images/home/model-bg.png");
          top: 0;
          z-index: 3;
        }
        &::before {
          left: 0;
          background-position: left;
        }
        &::after {
          right: 0;
          background-position: right center;
        }
        .swiper-button-prev,
        .swiper-button-next {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 0.28125rem;
          height: 0.28125rem;
          background-color: #f3f5f5;
          border-radius: 50%;
          position: absolute;
          z-index: 8;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .swiper-button-prev {
          left: 5px;
          transform: rotateZ(180deg);
          box-shadow: 0 -5px 7px 1px #d0d0d0;
        }
        .swiper-button-next {
          right: 5px;
          box-shadow: 0 5px7px 1px #d0d0d0;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          content: "\e602";
          font-family: "JS";
          font-size: 0.09375rem;
          color: #6b6d6f;
        }
        .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
        }
        .swiper-items {
          width: 1.510417rem;
          height: 2.34375rem;
          overflow: hidden;
          margin: 0 auto;
          padding: 0.104167rem;
          background-color: #f5f7f7;
          border: 1px solid #d1d1d7;
          border-radius: 10px;
          box-sizing: border-box;
          position: relative;
          .items-tip {
            i {
              font-size: 0.125rem;
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
            // overflow: hidden;
            border-radius: 8px;
            margin-top: 0.1rem;
            position: relative;
            cursor: pointer;
            z-index: 3;
            // box-sizing: border-box;
            img {
              width: 100%;
              height: 100%;
              border-radius: 8px;
            }
            .min-mantle {
              height: 50%;
              position: absolute;
              border-radius: 2px;
              left: 0;
              right: 0;
              margin: 0 auto;
              transition: all 300ms ease-in-out;
              width: 0;
            }
            .one {
              background-color: rgba(0, 184, 215, 0.16);
              z-index: -1;
              top: -0.05rem;
            }
            .two {
              border-radius: 1px;
              background-color: rgba(0, 184, 215, 0.07);
              z-index: -2;
              top: -0.08rem;
            }
            .mantle {
              width: 0;
              height: 100%;
              position: absolute;
              box-shadow: 1px -1px #dec9c9;
              left: 0;
              right: 0;
              margin: auto;
              top: 0;
              z-index: 6;
              border-radius: 8px;
              background-color: rgba(255, 255, 255, 0.75);
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
          }
          .items-content-check {
            .one {
              width: 87%;
            }
            .two {
              width: 72%;
            }
            .mantle {
              width: 100%;
            }
          }
          .items-foot {
            margin-top: 0.1rem;
            display: flex;
            > div {
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
    .model-swiper {
      /deep/ .swiper-container {
        .swiper-items {
          width: 1.666667rem;
          height: 2.604167rem;
          .items-content {
            height: 2rem;
          }
          .items-foot {
            margin-top: 0.01rem;
          }
        }
      }
    }
  }
  .model-move {
    padding-bottom: 0.208333rem;
    .move {
      width: 115px;
      height: 26px;
      text-align: center;
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
  // 模板迷你版
  .model-min {
    display: none;
    padding: 0 0.426rem;
    .model-items {
      margin-bottom: 0.266rem;
      padding: 4px;
      width: 4.266rem;
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: 5px;
      .items-img {
        width: 100%;
        height: 3.866rem;
        overflow: hidden;
        border-radius: 5px;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
      .items-tip {
        font-size: 0.346rem;
        color: #343435;
        line-height: 0.746rem;
        text-indent: 5px;
      }
      .items-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.133rem;
        padding-bottom: 0.32rem;
        .btn {
          font-size: 0.24rem;
          padding: 0.2rem 0.293rem;
          border-radius: 0.466rem;
          filter: drop-shadow(0px 0.106rem 2.5px rgba(255, 203, 91, 0.23));
        }
      }
    }
  }
}
// 用户反馈 和联系我们的盒子
.user-us-box {
  padding-top: 0.625rem;
  padding-bottom: 0.989583rem;
  background-image: url("../../assets/images/home/userUs/user-us-bj.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0.15625rem;
  > div {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.667rem 0 0.833333rem;
    box-sizing: border-box;
  }
}
// 用户反馈
.user-back {
  margin-bottom: 1.25rem !important;
  .user-image {
    width: 2.71875rem;
    height: 2.057292rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .user-content {
    width: 2.729167rem;
    height: 2.057292rem;
    .user-title {
      position: relative;
      font-size: 0.177083rem;
      line-height: 0.395833rem;
      color: #172945;
      font-family: Georgia;
      margin-bottom: 0.15625rem;
      .line {
        height: 1px;
        width: 0.463542rem;
        height: 2px;
        border-radius: 1px;
        background-color: #67c7d8;
      }
    }
    .user-list {
      padding: 0 0.052083rem;
      .list-itme {
        display: flex;
        margin-bottom: 0.114583rem;
        .item-img {
          width: 40px;
          height: 40px;
          position: relative;
          margin-right: 10px;
          flex-shrink: 0;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          i {
            color: #fdc85c;
            font-size: 20px;
            position: absolute;
            left: -15%;
            top: -20%;
            transform: rotateY(180deg);
          }
        }
        .item-content {
          font-family: "Alibaba Pu Hui Ti R";
          h4 {
            line-height: 24px;
            font-size: 18px;
            color: #3c495e;
          }
          p {
            line-height: 24px;
            font-size: 14px;
            color: #9da7b8;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }
    }
  }
}
.contect-us {
  .us-content {
    width: 1.875rem;
    height: 1.692708rem;
    .us-title {
      position: relative;
      font-size: 0.177083rem;
      line-height: 0.395833rem;
      color: #172945;
      font-family: Georgia;
      margin-bottom: 0.15625rem;
      .line {
        height: 1px;
        width: 0.46875rem;
        height: 2px;
        border-radius: 1px;
        background-color: #67c7d8;
      }
    }
    .us-list {
      .us-eg {
        margin-bottom: 0.145833rem;
        display: flex;
        align-items: flex-end;
        i {
          font-size: 20px;
          color: #fdc85c;
          margin-right: 14px;
        }
        span {
          color: #566986;
          font-size: 14px;
        }
      }
    }
    .us-init {
      width: 0.9375rem;
      height: 0.260417rem;
      border-radius: 0.15625rem;
      color: #ffffff;
      background-image: linear-gradient(-88deg, #33a9c1 0%, #7ad1e0 99%);
      display: flex;
      align-items: center;
      justify-content: center;
      .init-txt {
        font-size: 0.083333rem;
      }
      i {
        font-size: 0.083333rem;
        margin-left: 0.0625rem;
      }
    }
  }
  .us-image {
    width: 2.729167rem;
    height: 1.692708rem;
    img {
      height: 100%;
    }
  }
}
// 用户反馈-移动版
.min-user-us-box {
  padding: 0 0.426rem;
  background-color: #f3f5f5;
  padding-bottom: 0.266rem;
  display: none;
  .title {
    margin-bottom: 0.266rem;
  }
  .user-back {
    margin-bottom: 0 !important;
    .user-content {
      width: 100%;
      height: auto;
      .user-list {
        .list-itme {
          background-color: #ffffff;
          border-radius: 0.1333rem;
          padding: 0.33rem 0.466rem;
          margin-bottom: 0.266rem;
        }
      }
    }
  }
}
// 制作功能
.production {
  padding-bottom: 0.364583rem;
  .title {
    margin-bottom: 0.364583rem;
  }
  .prod-content {
    padding: 0 0.75rem;
    display: flex;
    justify-content: space-around;
    .item {
      width: 1.614583rem;
      text-align: center;
      .item-img {
        margin-bottom: 0.260417rem;
        img {
          width: 0.833333rem;
          margin: 0 auto;
        }
      }
      .item-mssage {
        font-family: "Microsoft Ya Hei";
        .item-tip {
          font-size: 0.114583rem;
          line-height: 0.15625rem;
          color: #4b5454;
          font-weight: bold;
          margin-bottom: 0.15625rem;
        }
        .item-cont {
          font-size: 0.09375rem;
          line-height: 0.145833rem;
          color: #999999;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .model-show {
    .model-big {
      display: none;
    }
    .model-large {
      display: block;
    }
  }
  .user-back {
    .user-content {
      .user-list {
        .list-itme {
          .items-img {
            width: 30px;
            height: 30px;
            margin-right: 5px;
          }
          .item-content {
            h4 {
              line-height: 20px;
              font-size: 14px;
            }
            p {
              line-height: 22px;
              font-size: 12px;
            }
          }
        }
      }
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
    background-color: #f3f5f5;
  }
  .model-show {
    background-color: #f3f5f5;
    background-image: none;
    .model-large {
      display: none;
    }
    .model-move {
      display: none;
    }
    .model-min {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .user-us-box {
    display: none;
  }
  .min-user-us-box {
    display: block;
  }
  .production {
    background-color: #f3f5f5;
    padding-bottom: 1.2rem;
    .prod-content {
      padding: 0 0.426rem;
      .item {
        width: 2.533rem;
        .item-img {
          width: 1.733rem;
          height: 1.733rem;
          border-radius: 50%;
          margin: 0 auto;
          background-color: #e3f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.2666rem;
          img {
            width: 1.2rem;
          }
        }
        .item-mssage {
          .item-tip {
            font-size: 0.306rem;
            line-height: 0.4rem;
            color: #4b5454;
            font-weight: normal;
          }
          .item-cont {
            display: none;
          }
        }
      }
    }
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
