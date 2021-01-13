<template>
  <div class="form-work">
    <div class="form-work-item">
      <div class="form-work-item-img">
        <img :src="items" alt="" />
      </div>
      <div class="form-work-item-introduce">
        <h3>My first resume</h3>
        <p>A resume prepared by an unhired programmer by an..... </p>
      </div>
    </div>
    
  </div>
</template>

<script>
import items from "@/assets/images/home/model/01.png";
export default {
  name:"form-work",
  data(){
    return {
      items
    }
  },

}
</script>

<style lang="less" scoped>
.form-work {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  >.form-work-item {
    flex-basis: 280px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #d4d9df;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 28px;
    background-color: #ffffff;
    // height: 390px;
    .form-work-item-img {
      box-sizing: border-box;
      width: 100%;
      height: 258px;
      border: 1px solid  #d4d9df;
      overflow: hidden;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    .form-work-item-introduce {
      height: 80px;
      h3 {
        font-size: 14px;
        line-height: 32px;
        font-weight: bold;
        color: #263751;
      }
      p{
        word-wrap: break-word;
        font-size: 12px;
        line-height: 18px;
        color: #7c889c;
        text-overflow: ellipsis;
        display:-webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>