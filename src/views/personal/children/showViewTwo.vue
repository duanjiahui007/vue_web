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
          <div class="address"> <i class="JS JS-gps"></i>ShiFan Residential Quarter, FengTai District</div>    
        </div>
        <div class="view-is-content">
          <div class="view-is-left">
            <div class="view-is-user-basis">
              <img :src="image" alt="avtor"/>
              <h3 class="name">Jan Ke</h3>
              <div><label>Birthday</label><span>1988-08-05</span> </div>
              <div><label>Nationality</label><span>America</span></div>
            </div>
            <div class="view-is-user-other">
              <div class="title">
                <span></span>
                Hobbies and interests
              </div>
              <div class="view-is-user-cont">
                I like drawing, dancing, climbing 
                mountains, listening to music 
                and good at singing, making 
                speeches,playing basketball.
                When I was at school, I got good 
                grades and took an active part in 
                various school activities and 
                competitions
              </div>
            </div>

          </div>
          <div class="view-is-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../../assets/images/home/userUs/av.jpg'
export default {
  name:'viewBox',
  data(){
    return{
      image
    }
  },
  methods:{},

}
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
      .view-is-head{
        background-color:#2f4370;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:26px;
        > div {
          width: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #ffffff;
          &:nth-of-type(2){
            margin:  0 30px;
          }
          >i {
            font-size: 24px;
            padding: 8px;
            border: 1px solid #e1e1e1;
            border-radius: 50%;
            color: #ffffff;
            margin-right: 18px;
          }
        }
      }
      .view-is-content{
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
            >img {
              width:130px;
              height: 160px;
              margin: 0 auto ;
              border: 2px solid #ffffff;
            }
            h3 {
              font-size: 24px;
              line-height: 38px;
              color: #333333;
              text-align: center;
              margin-bottom: 10px;
            }
            >div {
              display: flex;
              padding: 10px 24px;
              label{
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
              span {display: block; border-radius:50%;width: 20px; height: 20px; padding: 4px; border: 1px solid #3d6ad1;background-clip: content-box; background-color: #3d6ad1;margin-right: 10px;}
              font-size: 14px;
              font-weight: bold;
              color: #3d6ad1;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #3d6ad1;
              line-height: 24px;
            }
            .view-is-user-cont{
              padding-top: 16px;
              line-height: 26px;
              font-size: 15px;
              color: #7a86a0;
            }
          }
        }
        .view-is-right {

        }
      }
    }                  
  }
}
</style>