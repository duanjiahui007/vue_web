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
        <div class="view-resume-right">
          <div class="line">
            <div class="line-bar"></div>
          </div>
          <!-- 基本资料 -->
          <div class="view-is-item">
            <div class="view-is-item-t view-is-item-c">
              <div class="bar"></div>
              <div class="title">Bansic information</div>
            </div>
            <div class="view-is-item-a view-is-item-c">
              <div class="top">Personal Introduction</div>
              <div class="txt">
                I am a person who works hard, studies hard and has the courage
                to innovate. I can skillfully use computer and master basic
                office software. Understand AE,HTML code,CSS+DIV architecture
                design, understand the use of HTML5+CSS3.
              </div>
            </div>
            <div class="view-is-item-a view-is-item-c">
              <div class="top">Place of birth</div>
              <div class="txt">ShiFan Residential Quarter,FengTai District</div>
            </div>
            <div class="view-is-item-a view-is-item-c">
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
            <div class="view-is-item-t view-is-item-c">
              <div class="bar"></div>
              <div class="title">Work experience</div>
            </div>
            <div class="view-is-item-a view-is-item-c">
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
            <div class="view-is-item-t view-is-item-c">
              <div class="bar"></div>
              <div class="title">Education experience</div>
            </div>
            <div class="view-is-item-a view-is-item-c">
              <div class="top">
                Bank of China <span class="time">2018.07-2020.09</span>
              </div>
              <div class="txt">
                <span>Major:</span>
                Engaged in graphic design,web design,UI design and other related
                work for more than 3 years,with rich design experience and
                marture work cases. Familiar with mobile UI design
                specifications and trends,good at working with upstream and
                downstream,understand the basic product flow.
              </div>
            </div>
            <div class="view-is-item-a view-is-item-c">
              <div class="top">
                Place of birth <span class="time">2018.07-2020.09</span>
              </div>
              <div class="txt">
                <span>Major:</span>
                Engaged in graphic design,web design,UI design and other related
                work for more than 3 years,with rich design experience and
                marture work cases. Familiar with mobile UI design
                specifications and trends,good at working with upstream and
                downstream,understand the basic product flow.
              </div>
            </div>
            <div class="view-is-item-a view-is-item-c">
              <div class="top">
                Personal homepage <span class="time">2018.07-2020.09</span>
              </div>
              <div class="txt">
                <span>Major:</span>
                Engaged in graphic design,web design,UI design and other related
                work for more than 3 years,with rich design experience and
                marture work cases. Familiar with mobile UI design
                specifications and trends,good at working with upstream and
                downstream,understand the basic product flow.
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
import colorSelect from "../css/components/colorSelect";
export default {
  name: "viewFour",
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
      // padding: 30px;
      border: 1px solid #e5e5e5;
      display: flex;
      .view-resume-left {
        width: 295px;
        flex-shrink: 0;
        background-color: #f1f1f1;
        padding: 30px;
        position: relative;
        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          z-index: 0;
        }
        &::before {
          height: 57%;
          background-color: #ece14b;
          top: 0;
          left: 0;
        }
        &::after {
          border-top: 50px solid #ece14b;
          border-bottom: 50px solid transparent;
          border-left: 147.5px solid transparent;
          border-right: 147.5px solid transparent;
          left: 0;
          top: 57%;
        }
        > div {
          position: relative;
          z-index: 2;
        }
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
          margin-bottom: 30px;
          .self-item {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 18px;
            .JS {
              background-color: #ffffff62;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              font-size: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #94a509;
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
          margin-bottom: 100px;
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
                  background-color: rgba(255, 255, 255, 0.42);
                }
                .c_bar {
                  background-color: #ffffff;
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
      .view-resume-right {
        flex: 1;
        padding: 20px;
        padding-top: 50px;
        position: relative;
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
          .view-is-item-c {
            position: relative;
            z-index: 8;
            margin-bottom: 25px;
            &:nth-last-of-type(1) {
              margin-bottom: 0;
            }
            .bar {
              width: 15px;
              height: 15px;
              padding: 3px;
              border-radius: 50%;
              border: 1px dashed #ece14b;
              background-color: #ece14b;
              background-clip: content-box;
              box-sizing: content-box;
              position: absolute;
              left: -30px;
              transform: translateX(-50%);
              top: 0;
            }
            .title {
              font-size: 14px;
              color: #bfbfbf;
              height: 25px;
              line-height: 25px;
              border-radius: 30px;
              padding: 0 10px;
              border: 1px solid #bfbfbf;
              display: inline-block;
            }
          }
          .view-is-item-a {
            .top {
              color: #f3e41f;
              font-size: 15px;
              font-weight: bold;
              line-height: 20px;
              margin-bottom: 10px;
              .time {
                font-size: 14px;
                color: #c9c7c7;
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
                color: #f0be28;
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
        .line {
          position: absolute;
          left: 50px;
          bottom: 20px;
          height: calc(100% - 55px);
          border-left: 1px dashed #ece14b;
          .line-bar {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ece14b;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
</style>
