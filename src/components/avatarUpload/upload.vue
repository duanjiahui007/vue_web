<template >
  <div class="avatar">
    <img :src="avatarImage" alt="avatar" @click.stop="startUpload"/>
    <input ref="upload" accept="image/png,image/jpeg,image/jpg" type="file" style="display:none" @change="upload"/>
  </div>
</template>

<script>
import avatar from "@/assets/images/personal/avatar.png";
export default {
  name:'avatarUpload',
  props:{
    imageUrl:{
      type:String,
      default:''
    },
  },
  data(){
    return {
      avatar,
      defaultImage:'',
    }
  },
  methods:{
    // 点击开始上传图片
    startUpload(){
      this.$refs.upload.click();
    },
    // 上传图片
    upload(e){
      const file = e.target.files[0];
      console.log(file)
      if(!file) return ;

      if(!file.type.match(/png|jpeg|jpg/g)){
        this.$message.warning('Avatar should be PNG, JPEG, JPG format!');
        this.$refs.upload.value = '';
        return ;
      }
      if(file.size/1024/1024>1){
        this.$message.warning('Picture size cannot exceed 3M!');
        this.$refs.upload.value = '';
        return ;
      }
      // 上传文件转化为文件格式  图片预览
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => { this.defaultImage = e.target.result};
      // 文件
      let formData = new FormData();
      formData.append("Files",file);
      this.$emit("files",formData);
      this.$refs.upload.value = '';
    },
  },
  computed:{
    avatarImage(){
      return this.imageUrl?this.imageUrl:this.defaultImage?this.defaultImage:avatar;
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>