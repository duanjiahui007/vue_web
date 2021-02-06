<template>
  <div class="view-box">
    <div class="nav-min">
      <span class="menu-one">Preview</span>
      <i>>>></i>
      <span>My first resume</span>
    </div>
    <div class="view-content">
      <div class="view-is-resume">
        <div class="view-is-head">
          <div class="phone"><i class="JS JS-phone"></i> 18622487752</div>
          <div class="email"><i class="JS JS-email"></i> 2487752212@qq.com</div>
          <div class="address">
            <i class="JS JS-gps"></i>ShiFan Residential Quarter, FengTai
            District
          </div>
        </div>
        <div class="view-is-content">
          <div class="view-is-left">
            <div class="view-is-user-basis">
              <img :src="image" alt="avtor" />
              <h3 class="name">Kai Wen</h3>
              <div><label>Birthday</label><span>1988-08-05</span></div>
              <div><label>Nationality</label><span>America</span></div>
            </div>
            <div class="view-is-user-other">
              <div class="title">
                <span></span>
                Hobbies and interests
              </div>
              <div class="view-is-user-cont">
                I like drawing, dancing, climbing mountains, listening to music
                and good at singing, making speeches,playing basketball. When I
                was at school, I got good grades and took an active part in
                various school activities and competitions
              </div>
            </div>
            <div class="view-is-user-other">
              <div class="title">
                <span></span>
                Special Skill
              </div>
              <div class="view-is-user-cavars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div class="item">
                  <i>25%</i>
                  <span>Html</span>
                </div>
                <div class="item">
                  <i>25%</i>
                  <span>JavaScript</span>
                </div>
                <div class="item">
                  <i>36%</i>
                  <span>Css</span>
                </div>
                <div class="item">
                   <i>16%</i>
                  <span>Node</span>
                </div>
                <div class="item">
                  <i>26%</i>
                  <span>Node</span>
                </div>
                <div class="item">
                  <i>2%</i>
                  <span>Angla</span>
                </div>
              </div>
            </div>
            <div class="view-is-user-other">
              <div class="title">
                <span></span>
                New title
              </div>
              <div class="view-is-user-cont">
                I like drawing, dancing, climbing 
                mountains, listening to music  
                and good at singing, making 
                speeches,playing basketball.
              </div>
            </div>
          </div>
          <div class="view-is-right">
            <div class="view-is-item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../../../assets/images/home/userUs/av.jpg";
export default {
  name: "viewBox",
  data() {
    return {
      image
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.view-box {
  > .nav-min {
    display: flex;
    align-items: center;
    line-height: 28px;
    font-size: 12px;
    color: #bababa;
    > span {
      margin-right: 10px;
    }
    .menu-one {
      cursor: pointer;
    }
    > i {
      margin-right: 10px;
    }
  }
  .view-content {
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 5px #e5e5e5;
    padding: 27px 20px;
    background-color: #ffffff;
    .view-is-resume {
      border: 1px solid #d5d6d7;
      position: relative;
      .view-is-head {
        background-color: #2f4370;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 26px;
        > div {
          width: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #ffffff;
          &:nth-of-type(2) {
            margin: 0 30px;
          }
          > i {
            font-size: 24px;
            padding: 8px;
            border: 1px solid #e1e1e1;
            border-radius: 50%;
            color: #ffffff;
            margin-right: 18px;
          }
        }
      }
      .view-is-content {
        display: flex;
        .view-is-left {
          flex-shrink: 0;
          width: 295px;
          padding-top: 58px;
          padding: 50px 20px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f1f1f1;
          .view-is-user-basis {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 40px;
            > img {
              width: 130px;
              height: 160px;
              margin: 0 auto;
              border: 2px solid #ffffff;
            }
            h3 {
              font-size: 24px;
              line-height: 38px;
              color: #333333;
              text-align: center;
              margin-bottom: 10px;
            }
            > div {
              display: flex;
              padding: 10px 24px;
              label {
                width: 50%;
                flex-shrink: 0;
                font-size: 16px;
                color: #bbbbbb;
              }
              span {
                flex: 1;
                color: #6d7da2;
                font-size: 14px;
              }
            }
          }
          .view-is-user-other {
            width: 100%;
            margin-bottom: 22px;
            .title {
              span {
                display: block;
                border-radius: 50%;
                width: 13px;
                height: 13px;
                padding: 3px;
                border: 1px solid #3d6ad1;
                background-clip: content-box;
                background-color: #3d6ad1;
                margin-right: 10px;
              }
              font-size: 14px;
              font-weight: bold;
              color: #3d6ad1;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #3d6ad1;
              line-height: 24px;
            }
            .view-is-user-cont {
              padding-top: 16px;
              line-height: 26px;
              font-size: 15px;
              color: #7a86a0;
            }
            .view-is-user-cavars {
              padding: 15px 0;
              position: relative;
              height: 350px;
              overflow: hidden;
              > div {
                position: absolute;
                border-radius: 50%;
                background-color: #dedede;
                width: 120px;
                height: 120px;
                bottom: 0;
                &:nth-of-type(1){
                  top: 6%;
                  transform: scale(.6);
                }
                &:nth-of-type(2){
                  left: 40%;
                  top: 0;
                  transform: scale(0.68);
                }
                &:nth-of-type(3){
                  top: 40%;
                  left: -4%;
                  transform: scale(0.7);
                }
                &:nth-of-type(4){
                  top:52%;
                  left: 26%;
                  transform: scale(.5);
                }
                &:nth-of-type(5){
                  top: 31%;
                  left: 55%;
                  transform: scale(0.7);
                }
                &:nth-of-type(6) {
                  top: 61%;
                  left: 14%;
                  transform: scale(.87);
                }
                &:nth-of-type(6){
                  top: 77%;
                  left: -3%;
                  transform: scale(0.87);
                }
                &:nth-of-type(7) {
                  top: 60%;
                  left: 54%;
                  transform: scale(0.64);
                }
              }
              .item {
                background-color: rgba(61, 106, 209,.7);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                i{
                  font-size:14px;
                  margin-bottom: 5px;
                }
                span{
                  font-size: 15px;
                }
                &:nth-last-of-type(1){
                  top: 12%;
                  left: 10%;
                  transform: scale(0.64);
                }
                &:nth-last-of-type(2){
                  top: 10%;
                  right: 2%;
                  transform: scale(0.67);
                }
                &:nth-last-of-type(3){
                  top: 38%;
                  right: -3%;
                  transform: scale(0.67);
                }
                &:nth-last-of-type(4) {
                  top: 52%;
                  left: -4%;
                  transform: scale(0.5)
                }
                &:nth-last-of-type(5) {
                  bottom: 32%;
                  right: 30%;
                  transform: scale(0.67);
                }
                &:nth-last-of-type(6){
                  transform: scale(0.7);
                  right: 25%;
                  bottom: -3%;
                }
              }
            }
          }
        }
        .view-is-right {
          padding: 20px;
        }
      }
    }
  }
}
</style>
