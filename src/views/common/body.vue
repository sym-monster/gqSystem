<template>
  <div id="navbody" :class="[collapse ? 'body-s-m' : 'body-s']">
    <router-view />
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
    };
  },

  created() {
    // 通过 Event Bus 进行组件间通信，来调整body宽度
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../../../style/body.scss";
.body-s {
  overflow-y: scroll; /** 控制子框架浏览*/
  position: fixed;
  display: block;
  left: $navmenu;
  right: 0;
  top: 75px;
  bottom: 0;
  border: 10px solid #f7f7f7;
  border-bottom: none;
  background-color: #fff;
  //-webkit-box-sizing: border-box;
  -webkit-transition: all, 0.5s ease 0s;
}
.body-s-m {
  overflow-y: scroll; /** 控制子框架浏览*/
  position: fixed;
  display: block;
  left: 70px;
  right: 0;
  top: 75px;
  bottom: 0;
  border: 10px solid #f7f7f7;
  border-bottom: none;
  background-color: #fff;
  //-webkit-box-sizing: border-box;
  -webkit-transition: all, 0.5s ease 0s;
}
</style>
