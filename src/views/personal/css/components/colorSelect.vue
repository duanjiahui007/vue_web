<template>
  <div class="view-document-color">
    <div class="color-board">
      <i style="background-color: #ffb6c1"></i>
      <i style="background-color: #dc143c"></i>
      <i style="background-color: #ff00ff"></i>
      <i style="background-color: #7b68ee"></i>
      <i style="background-color: #4169e1"></i>
      <i style="background-color: #00ffff"></i>
      <i style="background-color: #00ced1"></i>
      <i style="background-color: #7fffaa"></i>
      <i style="background-color: #3cb371"></i>
      <i style="background-color: #68a868"></i>
      <i style="background-color: #006400"></i>
    </div>
    <a-button type="danger" shape="round">Finished</a-button>
  </div>
</template>

<script>
export default {
  name:'color-select',
  data(){
    return {}
  },
  methods:{},

}
</script>

<style lang="less" scoped>
@import "../public.less";
</style>