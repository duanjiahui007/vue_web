<template>
  <div class="view-box">
    <div class="nav-min">
      <router-link class="menu-one" to="">Preview</router-link>
      <i>>>></i>
      <span>My first resume</span>
    </div>
    <div class="view-content">
      <color-select></color-select>
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
                I like drawing, dancing, climbing mountains, listening to music
                and good at singing, making speeches,playing basketball.
              </div>
            </div>
          </div>
          <div class="view-is-right">
            <!-- 基本资料 -->
            <div class="view-is-item">
              <div class="line">
                <div class="line-bar"></div>
              </div>
              <div class="view-is-item-t view-is-item-c">
                <i class="JS JS-myself"></i>
                <div class="title">Bansic information</div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">Personal Introduction</div>
                <div class="txt">
                  I am a person who works hard, studies hard and has the courage
                  to innovate. I can skillfully use computer and master basic
                  office software. Understand AE,HTML code,CSS+DIV architecture
                  design, understand the use of HTML5+CSS3.
                </div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">Place of birth</div>
                <div class="txt">
                  ShiFan Residential Quarter,FengTai District
                </div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">Personal homepage</div>
                <div class="txt">
                  <a href="#">http://114.116.21.206/park</a>
                  <a href="#">http://114.116.21.206/park</a>
                  <a href="#">http://114.116.21.206/park</a>
                </div>
              </div>
            </div>
            <!-- 工作经历 -->
            <div class="view-is-item">
              <div class="line">
                <div class="line-bar"></div>
              </div>
              <div class="view-is-item-t view-is-item-c">
                <i class="JS JS-work"></i>
                <div class="title">Work experience</div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">
                  Bank of China <span class="time">2018.07-2020.09</span>
                </div>
                <div class="txt">
                  <h4>UI designer</h4>
                  <ul>
                    <li>
                      Engaged in graphic design,web design,UI design and other
                      related work for more than 3 years,with rich design
                      experience and marture work cases.
                    </li>
                    <li>
                      Familiar with mobile UI design specifications and
                      trends,good at working with upstream and
                      downstream,understand the basic product flow.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">
                  Place of birth <span class="time">2018.07-2020.09</span>
                </div>
                <div class="txt">
                  <h4>UI designer</h4>
                  <ul>
                    <li>
                      Engaged in graphic design,web design,UI design and other
                      related work for more than 3 years,with rich design
                      experience and marture work cases.
                    </li>
                    <li>
                      Familiar with mobile UI design specifications and
                      trends,good at working with upstream and
                      downstream,understand the basic product flow.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">
                  Personal homepage <span class="time">2018.07-2020.09</span>
                </div>
                <div class="txt">
                  <h4>UI designer</h4>
                  <ul>
                    <li>
                      Engaged in graphic design,web design,UI design and other
                      related work for more than 3 years,with rich design
                      experience and marture work cases.
                    </li>
                    <li>
                      Familiar with mobile UI design specifications and
                      trends,good at working with upstream and
                      downstream,understand the basic product flow.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- 教育经历 -->
            <div class="view-is-item">
              <div class="line">
                <div class="line-bar"></div>
              </div>
              <div class="view-is-item-t view-is-item-c">
                <i class="JS JS-edu"></i>
                <div class="title">Education experience</div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">
                  Bank of China <span class="time">2018.07-2020.09</span>
                </div>
                <div class="txt">
                  <span>Major:</span>
                  Engaged in graphic design,web design,UI design and other
                  related work for more than 3 years,with rich design experience
                  and marture work cases. Familiar with mobile UI design
                  specifications and trends,good at working with upstream and
                  downstream,understand the basic product flow.
                </div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">
                  Place of birth <span class="time">2018.07-2020.09</span>
                </div>
                <div class="txt">
                  <span>Major:</span>
                  Engaged in graphic design,web design,UI design and other
                  related work for more than 3 years,with rich design experience
                  and marture work cases. Familiar with mobile UI design
                  specifications and trends,good at working with upstream and
                  downstream,understand the basic product flow.
                </div>
              </div>
              <div class="view-is-item-a view-is-item-c">
                <div class="bar"></div>
                <div class="top">
                  Personal homepage <span class="time">2018.07-2020.09</span>
                </div>
                <div class="txt">
                  <span>Major:</span>
                  Engaged in graphic design,web design,UI design and other
                  related work for more than 3 years,with rich design experience
                  and marture work cases. Familiar with mobile UI design
                  specifications and trends,good at working with upstream and
                  downstream,understand the basic product flow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../../../assets/images/home/userUs/av.jpg";
// 颜色选择器
import colorSelect from "../css/components/colorSelect";
export default {
  name: "viewBox",
  data() {
    return {
      image
    };
  },
  methods: {},
  components: { colorSelect }
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
                &:nth-of-type(1) {
                  top: 6%;
                  transform: scale(0.6);
                }
                &:nth-of-type(2) {
                  left: 40%;
                  top: 0;
                  transform: scale(0.68);
                }
                &:nth-of-type(3) {
                  top: 40%;
                  left: -4%;
                  transform: scale(0.7);
                }
                &:nth-of-type(4) {
                  top: 52%;
                  left: 26%;
                  transform: scale(0.5);
                }
                &:nth-of-type(5) {
                  top: 31%;
                  left: 55%;
                  transform: scale(0.7);
                }
                &:nth-of-type(6) {
                  top: 61%;
                  left: 14%;
                  transform: scale(0.87);
                }
                &:nth-of-type(6) {
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
                background-color: rgba(61, 106, 209, 0.7);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                i {
                  font-size: 14px;
                  margin-bottom: 5px;
                }
                span {
                  font-size: 15px;
                }
                &:nth-last-of-type(1) {
                  top: 12%;
                  left: 10%;
                  transform: scale(0.64);
                }
                &:nth-last-of-type(2) {
                  top: 10%;
                  right: 2%;
                  transform: scale(0.67);
                }
                &:nth-last-of-type(3) {
                  top: 38%;
                  right: -3%;
                  transform: scale(0.67);
                }
                &:nth-last-of-type(4) {
                  top: 52%;
                  left: -4%;
                  transform: scale(0.5);
                }
                &:nth-last-of-type(5) {
                  bottom: 32%;
                  right: 30%;
                  transform: scale(0.67);
                }
                &:nth-last-of-type(6) {
                  transform: scale(0.7);
                  right: 25%;
                  bottom: -3%;
                }
              }
            }
          }
        }
        .view-is-right {
          flex: 1;
          padding: 20px;
          .view-is-item {
            margin-bottom: 34px;
            padding: 0 0 0 60px;
            position: relative;
            &:nth-last-of-type(1) {
              margin-bottom: 0;
            }
            &::after {
              content: "";
              display: table;
            }
            .line {
              position: absolute;
              left: 30px;
              bottom: 0;
              height: 100%;
              border-left: 1px dashed #cdd5e8;
              .line-bar {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #5a75b4;
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translateX(-50%);
              }
            }
            .view-is-item-c {
              position: relative;
              z-index: 8;
              margin-bottom: 25px;
              &:nth-last-of-type(1) {
                margin-bottom: 0;
              }
              .JS {
                position: absolute;
                left: -30px;
                transform: translateX(-50%);
                top: 0;
                color: #ffffff;
                background-color: #5c7cc6;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                line-height: 25px;
                text-align: center;
                box-shadow: 0 0 2px 5px #e7e7e7;
              }
              .title {
                font-size: 14px;
                color: #8091b7;
                height: 25px;
                line-height: 25px;
                border-radius: 30px;
                padding: 0 10px;
                border: 1px solid #d1d8ea;
                display: inline-block;
              }
            }
            .view-is-item-a {
              .bar {
                width: 10px;
                height: 10px;
                padding: 3px;
                border-radius: 50%;
                border: 1px dashed #5a75b4;
                background-color: #5a75b4;
                background-clip: content-box;
                box-sizing: content-box;
                position: absolute;
                left: -30px;
                transform: translateX(-50%);
                top: 0;
              }
              .top {
                color: #4863a2;
                font-size: 15px;
                font-weight: bold;
                line-height: 20px;
                margin-bottom: 10px;
                .time {
                  font-size: 14px;
                  color: #7a86a0;
                  font-weight: normal;
                  margin-left: 14px;
                }
              }
              .txt {
                font-size: 14px;
                color: #565656;
                line-height: 22px;
                h4 {
                  font-weight: 15px;
                  color: #f7bf59;
                  margin-bottom: 15px;
                }
                a {
                  color: #f7bf59;
                  border-bottom: 1px solid #f7bf59;
                  display: inline-block;
                  font-size: 14px;
                  margin-right: 20px;
                }
                ul {
                  list-style: decimal inside;
                }
                span {
                  color: #f7bf59;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
