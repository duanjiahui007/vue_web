<template>
  <div class="imageBox">
    <div>Profile Photo</div>
    <img
      :src="defaultSrc"
      ref="avant"
      alt="头像"
      @error="error"
      class="showImage"
      @click.stop="createUpload"
    />
    <input
      type="file"
      accept="image/*"
      name="imageUpload"
      class="imageFile"
      id="imageUpload"
      ref="upLoad"
      @change="uploadImage"
    />
    <p @click.stop="createUpload">+ Add photos</p>
  </div>
</template>

<script>
// import { imageUpload } from '@/api/setup/index'
import avatar from "@/assets/images/online/image.png";
export default {
  name: "imageBox",
  props: {
    image: {
      type: String,
      default: "avatar"
    }
  },
  data() {
    return {
      avatar,
      defaultSrc: ""
    };
  },
  methods: {
    createUpload() {
      this.$refs.upLoad.click();
    },
    uploadImage(e) {
      const file = e.target.files[0];
      console.log(file);
      if (!file) {
        return;
      }
      if (!file.type.match(/png|jpeg|jpg/g)) {
        this.$message.warning("Pictures only support png | JPEG | JPG format!");
        this.$refs.upLoad.value = "";
        return;
      }
      console.log(this);
      if (file.size / 1024 / 1024 > 3) {
        this.$message.warning("Picture size less than 3M !");
        this.$refs.upLoad.value = "";
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.defaultSrc = e.target.result;
      };

      let formData = new FormData();
      formData.append("files", file);
      // imageUpload(formData).then(res=>{
      //     this.$message({
      //         type:'success',
      //         message:this.$t('setUp.uploadOk')
      //     })
      //     this.$emit("uploadOK")
      // }).catch(err=>{
      //     this.$message({
      //         type:'error',
      //         message:this.$t('setUp.uploadFailed')
      //     })
      // })

      // let xhr = new XMLHttpRequest();
      // let url = "https://www.jinlichi.net/games/goodsupload/upload_pic_save"
      // xhr.open('post',url,true)
      // xhr.setRequestHeader('Authorization','5699744f38d791caa71a55799b48d4ea');
      // // xhr.setRequestHeader('Content-Type','multipart/form-data');
      // let formData = new FormData();
      // formData.append("data", file);
      // // Object.keys(file).forEach((item,index) => {
      // //     formData.append(index,item)
      // // });
      // xhr.send(formData)
    },
    error() {
      this.$refs.avant.setAttribute("src", this.avatar);
    }
  },
  watch: {
    image(newData) {
      this.defaultSrc = newData;
    }
  }
};
</script>

<style scoped>
.imageBox {
  text-align: center;
}
.imageBox > div {
  color: #7c889c;
  margin-bottom: 22px;
  font-size: 0.09375rem;
}
.imageBox > img {
  width: 1.041667rem;
  height: 1.041667rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  background-color: rgb(168, 164, 164);
  margin-bottom: 26px;
  cursor: pointer;
}
.imageBox > .imageFile {
  display: none;
}
.imageBox > p {
  font-size: 0.104167rem;
  cursor: pointer;
  color: #00cbec;
  display: inline-block;
  padding: 10px 16px;
  border: 1px solid #dfe2e6;
}
.imageBox > p:hover {
  color: #ffffff;
  background-color: #00cbec;
}
</style>
