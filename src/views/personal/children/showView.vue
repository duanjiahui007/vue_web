<template>
  <div class="showView">
    <div class="nav-min">
      <span class="menu-one">Preview</span>
      <i>>>></i>
      <span>My first resume</span>
    </div>
    <div class="view-box">
      <div class="view-document-color">
        <div class="color-board">
          <i style="background-color:	#FFB6C1"></i>
          <i style="background-color:	#DC143C"></i>
          <i style="background-color:	#FF00FF"></i>
          <i style="background-color:	#7B68EE"></i>
          <i style="background-color:	#4169E1"></i>
          <i style="background-color:	#00FFFF"></i>
          <i style="background-color:	#00CED1"></i>
          <i style="background-color:	#7FFFAA"></i>
          <i style="background-color:	#3CB371"></i>
          <i style="background-color:	#68a868"></i>
          <i style="background-color:	#006400"></i>
        </div>
        <a-button type="danger" shape="round">Finished</a-button>
      </div>
      <div class="view-document">
        <div class="view-document-basis">
          <img src="" alt="author" class="portrait" />
          <div class="basis-information basis">
            <h3 class="title">基本信息</h3>
            <div class="age">
              <i class="JS JS-shijian"></i>
              <p>
                <span>年龄:</span>
                <span>28岁</span>
              </p> 
            </div>
            <div class="phone">
              <i class="JS JS-shouji"></i>
              <p>
                <span>手机号:</span>
                <span>16255864475</span>
              </p> 
            </div>
            <div class="address">
              <i class="JS JS-dingwei"></i>
              <p>
                <span>地址:</span>
                <span>上海奉贤区</span>
              </p>
            </div>
            <div class="email">
              <i class="JS JS-email_s"></i>
              <p>
                <span>邮箱:</span>
                <span>8854422668@168.com</span>
              </p> 
            </div>
          </div>
          <div class="basis basis-edu">
            <h3 class="title">教育背景</h3>
            <div class="basis-edu-school">
              <span>上海交通大学</span> 
              <span>2001.09.16-2005.07.08</span>
              <span>计算机科学与技术</span>
            </div>
            <div class="basis-edu-major">
              <span>主修课程: </span>
              <span>离散数学、</span>
              <span>计算机文化基础、</span>
              <span>微机原理与汇编语言、</span>
              <span>高等数学、</span>
              <span>单片机等</span>
            </div>
          </div>
          <div class="basis basis-skill">
            <h3>职业技能</h3>
            <div>
              <span>PSD</span>
              <div>
                <div class="progress"></div>
              </div>
            </div>
            <div>
              <span>计算机网络</span>
              <div>
                <div class="progress"></div>
              </div>
            </div>
            <div>
              <span>python</span>
              <div>
                <div class="progress"></div>
              </div>
            </div>
            <div>
              <span>Java</span>
              <div>
                <div class="progress"></div>
              </div>
            </div>
          </div>
          <div class="basis basis-love">
            <h3>兴趣爱好</h3>
            <div class="basis-love-item">
              <img :src="love1" alt="">
              <img :src="love2" alt="">
              <img :src="love3" alt="">
              <img :src="love4" alt="">
            </div>
          </div>
        </div>
        <div class="view-document-other">
          <div class="other-introduce">
            <div class="other-title">
              <h2>包小图</h2>
              <div class="other-introduce-sign">
                <span>求职目标:</span>
                <span>前端工程师</span>
              </div>
            </div>
            <p>职业介绍主体，所面对的是具有自身特点和独立择业意识的一个个不同的人，以及具有不同用人要求的一个个不同的企事业机关单位。择业者与用人单位选择对方的条件，有时是不符合实际情况，不合理的。例如，某些求职者一定要到外贸、外资公司等“好单位”；不少公司招工时，都要求“男1．75米、女1．65米、大学毕业”等。因此，职业介绍工作中，应当对择业者和用人单位的选择条件进行适当的引导，帮助他们明智地、合理地进行选择。这也可以说是职业介绍的“引导性”原则。在人力资源市场供求不平衡的情况下，通过引导使职业选择趋于合理显得更为重要。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import love1 from '@/assets/images/remover/01.png';
import love2 from '@/assets/images/remover/02.png';
import love3 from '@/assets/images/remover/03.png';
import love4 from '@/assets/images/remover/04.png';
export default {
  name: "showView",
  data() {
    return {love1,love2,love3,love4};
  }
};
</script>

<style lang="less" scoped>
.showView {
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
  > .view-box {
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 5px #e5e5e5;
    padding: 27px 20px;
    background-color: #ffffff;
    .view-document-color {
      margin-bottom: 14px;
      display: flex;
      justify-content: space-between;
      .color-board {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-basis: 80%;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        i {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
    .view-document {
      border: 1px solid #d5d6d7;
      display: flex;
      .view-document-basis {
        width: 295px;
        padding-top: 58px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #dce3dd;
        flex-shrink:0 ;
        .portrait {
          width: 175px;
          height: 175px;
          border: 1px solid #ffffff;
          border-radius: 50%;
          margin-bottom: 30px;
        }
        .basis {
          width: 80%;
          margin-bottom: 35px;
          h3 {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: bold;
            color: #334158;
          }
        }
        .basis-information {
          > div {
            display: flex;
            align-items: bottom;
            margin-bottom: 10px;
            i{
              flex-shrink: 0;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              background-color: #868a7b;
              text-align: center;
              line-height: 30px;
              font-size: 20px;
              color: #ffffff;
              margin-right: 10px;
            }
            p{
              font-size: 14px;
              color: #8a96a4;
              flex: 1;
              line-height: 30px;;
              border-bottom: 1px solid #9ca7b4;
              >span {
                white-space: nowrap;
              }
              > span:nth-of-type(1){
                margin-right: 5px;
              }
            }
          }
        }
        .basis-edu {
          >div {
            line-height: 24px;
            display: flex;
            flex-wrap: wrap;
            span {
              font-size: 12px;
              margin-right: 10px;
              font-weight: bold;
            }
          }
          .basis-edu-school {
            // margin-bottom: ;
            color: #787c74;
          }
          .basis-edu-major{
            color: #919ea9;
          }
        }
        .basis-skill {
          >div{
            margin-bottom: 10px;
            span {
              display: flex;
              margin-bottom: 8px;
              font-size: 12px;
              color: #5a6777;
            }
            >div{
              background-color: #cfdbea;
               overflow: hidden;  
              div{
                height: 10px;
                background-color: #868a7b;
                width: 60%;
                position: relative;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                &::after {
                  content: "";
                  display: block;
                  // border-bottom: 8px;
                  // border-left: 20px;
                  // border-top: 8px;
                  // border-right: 20px;
                  // border-color: #868a7b;
                  // border-style: solid;
                  border: 7px solid #868a7b;
                  position: absolute;
                  top: 0;
                  right: -14px;
                  z-index: 8;
                  border-right-color: transparent;
                  border-top-color:transparent;
                }
              }
            }
          }
        }
        .basis-love{
          margin-bottom: 70px;
          .basis-love-item {
            display: flex;
            justify-content: space-between;
            >img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
        }
      }
      .view-document-other {
        padding-top: 65px;
        padding-left: 50px;
        padding-right: 40px;
        padding-bottom: 45px;
        .other-introduce {
          .other-title {
            display: flex;
            align-items: flex-end;
            margin-bottom: 28px;
            h2{
              font-size: 45px;
              color: #6e7165;
              margin-right: 20px   ;
            }
            .other-introduce-sign {
              display: flex;
              align-items: center;
              background-color: #868a7b;
              font-size: 18px;
              color: #ffffff;
              height: 24px;
              padding: 0 10px;
              &>span:nth-of-type(1){
                margin-right: 10px;
              }
            }
            
          }
          > p {
            font-size: 14px;
            line-height: 24px;
            color: #6e7165;
          }
          
        }
      }
    }
  }
}
</style>
