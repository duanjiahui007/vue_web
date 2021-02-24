<template>
  <div class="view-box">
    <div class="nav-min">
      <div class="menu-one" to="">Preview</div>
      <i>>>></i>
      <span>My first resume</span>
    </div>
    <div class="view-content">
      <color-select></color-select>
      <div class="view-resume">
        <div class="view-resume-left">
          <!-- 姓名 -->
          <div class="tip-name">Fang Yu</div>
          <!-- 基本信息 -->
          <div class="basic">
            <h3>BASIC INFORMATION</h3>
            <div class="basic-item">
              <h5>Personal Introduction</h5>
              <div class="txt">
                I am a person who works hard, studies hard and has the courage
                to innovate. I can skillfully use computer and master basic
                office software. Understand AE,HTML code,CSS+DIV archiecture
                design,understand the use of HTML5+CSS3.
              </div>
            </div>
            <div class="basic-item">
              <h5>Place of birth</h5>
              <div class="txt">
                ShiFan Residential Quarter,FengTai District.
              </div>
            </div>
            <div class="basic-item">
              <h5>Personal homepage</h5>
              <div class="txt">
                <a href="#">http://www.xxxx.com</a>
                <a href="#">http://www.xxxx.com</a>
                <a href="#">http://www.xxxx.com</a>
              </div>
            </div>
          </div>
          <!-- 工作经历 -->
          <div class="work">
            <h3 class="title">>>> WORK EXPERIENCE</h3>
            <div class="work-item">
              <div class="time">2018.07-2020.09</div>
              <div class="content">
                <div class="tip">
                  Bank of China
                  <span>UI designer</span>
                </div>
                <div class="txt">
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
            <div class="work-item">
              <div class="time">2018.07-2020.09</div>
              <div class="content">
                <div class="tip">
                  Bank of China
                  <span>UI designer</span>
                </div>
                <div class="txt">
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
            <div class="work-item">
              <div class="time">2018.07-2020.09</div>
              <div class="content">
                <div class="tip">
                  Bank of China
                  <span>UI designer</span>
                </div>
                <div class="txt">
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
          </div>
          <!-- 教育经历 -->
          <div class="edu">
            <h3 class="title">>>> EDUCATION EXPERIENCE</h3>
            <div class="edu-item">
              <div class="time">
                <div class="tipx">BeiJing University</div>
                2014.09-2018.07
              </div>
              <div class="content">
                <span>Major:</span>
                <div class="txt">
                  Engaged in graphic design,web design,UI design and other
                  related work for more than 3 years,with rich design experience
                  and marture work cases. Familiar with mobile UI design
                  specifications and trends,good at working with upstream and
                  downstream,understand the basic product flow.
                </div>
              </div>
            </div>
            <div class="edu-item">
              <div class="time">
                <div class="tipx">BeiJing University</div>
                2014.09-2018.07
              </div>
              <div class="content">
                <span>Major:</span>
                <div class="txt">
                  Engaged in graphic design,web design,UI design and other
                  related work for more than 3 years,with rich design experience
                  and marture work cases. Familiar with mobile UI design
                  specifications and trends,good at working with upstream and
                  downstream,understand the basic product flow.
                </div>
              </div>
            </div>
            <div class="edu-item">
              <div class="time">
                <div class="tipx">BeiJing University</div>
                2014.09-2018.07
              </div>
              <div class="content">
                <span>Major:</span>
                <div class="txt">
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
        <div class="view-resume-right">
          <div class="image">
            <img :src="image" alt="" />
          </div>
          <div class="self">
            <div class="self-item">
              <i class="JS JS-birth"></i>
              <div class="content">
                <span>Birthday</span>
                <em>2020-06-25</em>
              </div>
            </div>
            <div class="self-item">
              <i class="JS JS-diqiu"></i>
              <div class="content">
                <span>Nationality</span>
                <em>French</em>
              </div>
            </div>
            <div class="self-item">
              <i class="JS JS-phone"></i>
              <div class="content">
                <span>16822549575</span>
              </div>
            </div>
            <div class="self-item">
              <i class="JS JS-email"></i>
              <div class="content">
                <span>2584458@qq.com</span>
              </div>
            </div>
            <div class="self-item">
              <i class="JS JS-gps"></i>
              <div class="content">
                <span>ShiFan Residential Quarter,FengTai District</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <h4>Special Skill</h4>
            <div class="content">
              <div class="items">
                <span>Adobe Photoshop</span>
                <div class="bar">
                  <i
                    v-for="item in 6"
                    :key="item"
                    :class="{ c_bar: item < 6 }"
                  ></i>
                </div>
              </div>
              <div class="items">
                <span>Adobe lllustrator</span>
                <div class="bar">
                  <i
                    v-for="item in 6"
                    :key="item"
                    :class="{ c_bar: item < 3 }"
                  ></i>
                </div>
              </div>
              <div class="items">
                <span>CorelDRAW</span>
                <div class="bar">
                  <i
                    v-for="item in 6"
                    :key="item"
                    :class="{ c_bar: item < 5 }"
                  ></i>
                </div>
              </div>
              <div class="items">
                <span>Adobe InDesign</span>
                <div class="bar">
                  <i
                    v-for="item in 6"
                    :key="item"
                    :class="{ c_bar: item < 5 }"
                  ></i>
                </div>
              </div>
              <div class="items">
                <span>Adobe Photoshop</span>
                <div class="bar">
                  <i
                    v-for="item in 6"
                    :key="item"
                    :class="{ c_bar: item < 4 }"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div class="hobbies">
            <h4>Hobbies and interests</h4>
            <p>
              I like drawing,dancing, climbing mountains, listening to music and
              good at singing, making speeches, playing basketball. When i was
              at school, I got good grades and took an active part in various
              school activities and competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../../../assets/images/home/userUs/av.jpg";
import colorSelect from "../css/components/colorSelect";
export default {
  name: "viewThree",
  data() {
    return { image };
  },
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

    .view-resume {
      padding: 30px;
      border: 1px solid #e5e5e5;
      display: flex;
      .view-resume-left {
        padding-right: 20px;
        flex: 1;
        .tip-name {
          line-height: 50px;
          font-size: 30px;
          font-weight: bold;
          color: #ffffff;
          padding: 0 60px 0 30px;
          background-color: #436191;
          position: relative;
          display: inline-block;
          overflow: hidden;
          &::after {
            content: "";
            display: flex;
            width: 50px;
            height: 100%;
            position: absolute;
            background: #ffffff;
            right: -20px;
            top: 0;
            transform: skewX(28deg);
          }
        }
        .basic {
          padding-top: 24px;
          margin-bottom: 36px;
          h3 {
            margin-bottom: 15px;
            font-size: 18px;
            color: #436191;
            font-weight: bold;
          }
          .basic-item {
            font-size: 14px;
            margin-bottom: 14px;
            &:nth-last-of-type(1) {
              margin-bottom: 0;
            }
            h5 {
              font-size: 16px;
              color: #3563ac;
              line-height: 24px;
            }
            .txt {
              color: #565656;
              line-height: 22px;
              a {
                color: #4fadee;
                border-bottom: 1px solid #4fadee;
                margin-right: 20px;
              }
            }
          }
        }
        .title {
          padding-bottom: 5px;
          border-bottom: 1px solid #bbbbbb;
          font-size: 18px;
          font-weight: bold;
          color: #436191;
        }
        .work {
          margin-bottom: 36px;
          .work-item {
            padding-top: 30px;
            display: flex;
            .time {
              flex-shrink: 0;
              width: 80px;
              box-sizing: border-box;
              padding-right: 10px;
              margin-right: 10px;
              border-right: 1px solid #bbbbbb;
              font-size: 16px;
              color: #3563ac;
              line-height: 20px;
            }
            .content {
              flex: 1;
              .tip {
                font-size: 15px;
                line-height: 30px;
                color: #3563ac;
                font-weight: bold;
                span {
                  font-weight: normal;
                  margin-left: 10px;
                  color: #4fadee;
                }
              }
              .txt {
                font-size: 14px;
                line-height: 24px;
                color: #565656;
                ul {
                  list-style: decimal inside;
                }
              }
            }
          }
        }
        .edu {
          .edu-item {
            padding: 30px 0 10px;
            display: flex;
            border-bottom: 1px solid #bbbbbb;
            .time {
              flex-shrink: 0;
              width: 160px;
              box-sizing: border-box;
              padding-right: 10px;
              margin-right: 10px;
              border-right: 1px solid #bbbbbb;
              font-size: 16px;
              color: #3563ac;
              line-height: 20px;
              .tipx {
                font-weight: bold;
                color: #3563ac;
                line-height: 1;
                margin-bottom: 10px;
              }
            }
            .content {
              flex: 1;
              display: flex;
              font-size: 14px;
              line-height: 24px;
              span {
                flex-shrink: 0;
                margin-right: 8px;
                color: #4fadee;
              }
              .txt {
                color: #565656;
              }
            }
          }
        }
      }
      .view-resume-right {
        width: 295px;
        flex-shrink: 0;
        background-color: #e5e6e8;
        border-top-left-radius: 200px;
        border-top-right-radius: 200px;
        padding: 30px;
        border-bottom: 30px solid #436191;
        .image {
          padding: 30px;
          img {
            width: 175px;
            height: 175px;
            border-radius: 50%;
            border: 1px solid #ffffff;
          }
        }
        .self {
          margin-bottom: 40px;
          .self-item {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 18px;
            .JS {
              background-color: #ffffff;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              font-size: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #5274ab;
              margin-right: 18px;
            }
            .content {
              flex: 1;
              font-size: 14px;
              line-height: 1;
              padding-bottom: 8px;
              border-bottom: 1px solid #cbcbcd;
              span {
                color: #060606;
                margin-right: 10px;
              }
              em {
                color: #9f9e8c;
              }
            }
          }
        }
        .skill {
          margin-bottom: 30px;
          h4 {
            font-size: 22px;
            color: #060606;
            margin-bottom: 20px;
          }
          .content {
            .items {
              display: flex;
              margin-bottom: 20px;
              span {
                flex-shrink: 0;
                flex-basis: 50%;
                color: #676b72;
                font-size: 14px;
              }
              .bar {
                flex-basis: 50%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                i {
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background-color: #dbdddf;
                }
                .c_bar {
                  background-color: #6385bb;
                }
              }
            }
          }
        }
        .hobbies {
          h4 {
            font-size: 22px;
            color: #060606;
            margin-bottom: 20px;
          }
          p {
            font-size: 14px;
            line-height: 28px;
            color: #676b72;
          }
        }
      }
    }
  }
}
</style>
