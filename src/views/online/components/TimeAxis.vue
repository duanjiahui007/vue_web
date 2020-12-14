<template>
  <div class="timeAxis">
    <ul>
      <li class="li-selec">
        <div class="item-txt">Resume information</div>
        <div class="item-icon ">
          <i class="JS JS-basic"></i>
        </div>
        <div class="item-line"></div>
      </li>
      <li class="miniLi  ">
        <div class="item-icon ">
          <i class="JS JS-wenjian"></i>
        </div>
        <div class="item-line"></div>
      </li>
      <li>
        <div class="item-txt">Basic information</div>
        <div class="item-icon">
          <i class="JS JS-myStuff"></i>
        </div>
        <div class="item-line"></div>
      </li>
      <li class="miniLi ">
        <div class="item-icon ">
          <i class="JS JS-wenjian"></i>
        </div>
        <div class="item-line"></div>
      </li>
      <li class="maxLi">
        <div class="item-txt">Experience</div>
        <div class="item-icon">
          <i class="JS JS-tool"></i>
        </div>
        <div class="item-line"></div>
      </li>
      <li class="endLi">
        <div class="item-txt">Finish</div>
        <div class="item-icon">
          <i class="JS JS-success"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "timeAxis",
  props: {
    Num: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      liData: null
    };
  },
  created() {},
  mounted() {
    this.liData = document.getElementsByTagName("li");
    for (let i = 0; i < this.Num; i++) {
      if (i > 0) {
        this.liData[i].classList.add("li-selec");
        this.liData[i - 1].classList.add("li-whole");
      } else {
        if (this.liData.length > 0) {
          this.liData[i].classList.add("li-selec");
        }
      }
    }
  },
  watch: {
    Num(NewData, oldData) {
      if (NewData === oldData) {
        return;
      }
      for (let i = this.Num; i < this.liData.length; i++) {
        if (this.liData[i].classList.contains("li-selec")) {
          this.liData[i].classList.remove("li-selec");
          setTimeout(() => {
            this.liData[i].classList.remove("li-goBack");
          }, 200);
        }
        if (this.liData[i - 1].classList.contains("li-whole")) {
          setTimeout(() => {
            this.liData[i - 1].classList.remove("li-whole");
          }, 200);
        }
      }
      for (let i = 0; i < this.Num; i++) {
        if (i > 0) {
          if (!this.liData[i].classList.contains("li-selec")) {
            setTimeout(() => {
              this.liData[i].classList.add("li-selec");
            }, 100);
            setTimeout(() => {
              this.liData[i].classList.add("li-goBack");
            }, 200);
          }
          if (!this.liData[i - 1].classList.contains("li-whole")) {
            this.liData[i - 1].classList.add("li-whole");
          }
        } else {
          this.liData[i].classList.add("li-selec");
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.timeAxis {
  position: relative;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      position: relative;
      border-radius: 50%;
      background-color: #e6e9ed;
      box-shadow: inset 0 2px 4px 4px #e8e8e8;
      width: 50px;
      height: 50px;
      padding: 4px;
      margin-right: 0.38rem;
      .item-icon {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 20px;
          color: #ababab;
          position: relative;
          z-index: 5;
        }
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          border-radius: 100%;
          background-image: linear-gradient(-88deg, #12b0cb 0%, #8eddef 98%);
          left: -100%;
          transition: all 100ms linear;
          top: 0;
          z-index: 4;
        }
      }
      .item-line {
        height: 14px;
        width: 0.4rem;
        border-right: 2px;
        background-color: #e6e9ed;
        box-shadow: inset 0 2px 4px 4px #e8e8e8;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 98%;
        margin: auto;
        &::before {
          content: "";
          display: block;
          height: 8px;
          width: 0;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -10%;
          margin: auto;
          border-radius: 10px;
          background-color: #23b7d0;
          transition: all 100ms linear 100ms;
          z-index: 2;
        }
      }
      .item-txt {
        position: absolute;
        top: 110%;
        margin-left: -50%;
        font-size: 14px;
        white-space: nowrap;
        color: #737981;
      }
    }
    .li-selec {
      .item-txt {
        color: #57c7d9;
      }
      .item-icon {
        i {
          color: #ffffff;
        }
        &::before {
          left: 0;
        }
      }
      .item-line {
        &::before {
          width: 40%;
        }
      }
      &.miniLi {
        .item-icon {
          &::before {
            background-image: none;
            background-color: #ffffff;
          }
          i {
            color: #23b7d0;
            font-size: 16px;
          }
        }
      }
    }
    .li-whole {
      .item-line {
        &::before {
          width: 120%;
        }
      }
    }
    .li-goBack {
      .item-icon {
        &::before {
          transition: all 100ms linear 100ms !important;
        }
      }
      .item-line {
        &::before {
          transition: all 100ms linear !important;
        }
      }
    }
    .miniLi {
      width: 35px;
      height: 35px;
      .item-icon {
        i {
          font-size: 16px;
        }
      }
    }
    .maxLi {
      margin-right: 0.76rem;
      .item-line {
        width: 0.8rem;
      }
    }
    .endLi {
      margin: 0;
      .item-txt {
        margin-left: 0;
      }
    }
  }
}
</style>
