<template>
  <div class="form-work">
    <!-- <div class="form-work-item">
      <div class="form-work-item-img">
        <img :src="items" alt="" />
      </div>
      <div class="form-work-item-introduce">
        <h3>My first resume</h3>
        <p>A resume prepared by an unhired programmer by an..... </p>
      </div>
      可用标志
      <div class="form-work-item-usable">
        Purchased
      </div>
      操作遮罩
      <div class="form-work-item-mock" @click.stop >
         <div class="form-work-item-mock-set">
           <i class="JS JS-bianji"></i>
           <i class="JS JS-fuzhixinzeng"></i>
           <i class="JS JS-shanchu"></i>
         </div>
         <a-button shape="round" class="form-work-item-mock-btn">Download</a-button>
         <a-button shape="round" class="form-work-item-mock-btn">Preview</a-button>
         <a-button shape="round" class="form-work-item-mock-btn">Replace the template</a-button>
      </div>
    </div> -->
    <!-- 个体 -->
    <div
      class="form-work-item"
      v-for="(data, index) in itemsData"
      :key="index"
      @click.stop="openMock(data)"
    >
      <div class="form-work-item-img">
        <img :src="data.imgs" alt="" />
      </div>
      <div class="form-work-item-introduce">
        <h3>{{ data.title }}</h3>
        <p>{{ data.introduce }}</p>
      </div>
      <!-- 可用标志 -->
      <div class="form-work-item-usable" v-if="data.isUsable">
        Purchased
      </div>
      <!-- 操作遮罩 -->
      <div
        class="form-work-item-mock"
        @click.stop="closeMock(data)"
        v-if="data.isOpen"
      >
        <div class="form-work-item-mock-set">
          <i class="JS JS-bianji"></i>
          <i class="JS JS-fuzhixinzeng"></i>
          <i class="JS JS-shanchu"></i>
        </div>
        <a-button shape="round" class="form-work-item-mock-btn"
          >Download</a-button
        >
        <a-button shape="round" class="form-work-item-mock-btn"
          >Preview</a-button
        >
        <a-button shape="round" class="form-work-item-mock-btn"
          >Replace the template</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/assets/images/home/model/01.png";
export default {
  name: "form-work",
  data() {
    return {
      items,
      itemsData: [
        {
          imgs: items,
          title: "My first resume",
          introduce: "A resume prepared by an unhired programmer by an..... ",
          isUsable: true,
          isOpen: false,
          id: 1
        },
        {
          imgs: items,
          title: "My first resume",
          introduce: "A resume prepared by an unhired programmer by an..... ",
          isUsable: true,
          isOpen: false,
          id: 1
        },
        {
          imgs: items,
          title: "My first resume",
          introduce: "A resume prepared by an unhired programmer by an..... ",
          isUsable: true,
          isOpen: false,
          id: 1
        },
        {
          imgs: items,
          title: "My first resume",
          introduce: "A resume prepared by an unhired programmer by an..... ",
          isUsable: true,
          isOpen: false,
          id: 1
        },
        {
          imgs: items,
          title: "My first resume",
          introduce: "A resume prepared by an unhired programmer by an..... ",
          isUsable: true,
          isOpen: false,
          id: 1
        }
      ]
    };
  },
  methods: {
    openMock(val) {
      this.itemsData.forEach(item => {
        item.isOpen = false;
      });
      val.isOpen = !val.isOpen;
    },
    closeMock(val) {
      val.isOpen = !val.isOpen;
    }
  }
};
</script>

<style lang="less" scoped>
.form-work {
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;

  > .form-work-item {
    margin-left: 60px;
    cursor: pointer;
    flex-basis: 280px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #d4d9df;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 28px;
    background-color: #ffffff;
    overflow: hidden;
    // height: 390px;
    // 简历展示图
    .form-work-item-img {
      box-sizing: border-box;
      width: 100%;
      height: 258px;
      border: 1px solid #d4d9df;
      overflow: hidden;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    // 简历介绍
    .form-work-item-introduce {
      height: 80px;
      h3 {
        font-size: 14px;
        line-height: 32px;
        font-weight: bold;
        color: #263751;
      }
      p {
        word-wrap: break-word;
        font-size: 12px;
        line-height: 18px;
        color: #7c889c;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    // 遮罩
    .form-work-item-mock {
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 30px;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.6);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .form-work-item-mock-set {
        position: absolute;
        right: 0;
        top: 24px;
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;
        > i {
          width: 28px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          font-size: 16px;
          color: #ffffff;
          border-radius: 50%;
          background-color: #37bbd1;
          margin-right: 10px;
          cursor: pointer;
          position: relative;
          &:active {
            transform: scale(0.9);
            transition: all 230ms ease-out;
          }
        }
      }
      .form-work-item-mock-btn {
        width: 180px;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #ffffff;
        background-color: #ffc34b;
        border-radius: 23px;
        margin-bottom: 20px;
        box-shadow: 0 5px 10px #e3e3e3;
        &:hover,
        &:focus {
          border-color: #ffc34b;
        }
        &:active {
          transform: scale(0.9);
          transition: all 300ms ease-out;
        }
      }
    }
    // 可用标志
    .form-work-item-usable {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 40px;
      font-size: 14px;
      border-bottom-left-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      background-color: #34b8cc;
    }
  }
}
</style>
