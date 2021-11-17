<template>
  <div>
    <div class="header">
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChage">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </div>
      <div class="logo">骨签信息系统</div>
    </div>
    <div class="sidebar">
      <el-menu
        class="sidebar-el-menu"
        :default-active="onRoutes"
        :collapse="collapse"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        unique-opened
        router
      >
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                    >{{ threeItem.title }}</el-menu-item
                  >
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                  >{{ subItem.title }}</el-menu-item
                >
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: "linxin",
      message: 2,

      items: [
        {
          icon: "el-icon-menu",
          index: "por",
          title: "骨签编号",
        },
        {
          icon: "el-icon-menu",
          index: "2",
          title: "预处理",
          subs: [
            {
              index: "form",
              title: "基本表单",
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "editor",
                  title: "富文本编辑器",
                },
                {
                  index: "markdown",
                  title: "markdown编辑器",
                },
              ],
            },
            {
              index: "upload",
              title: "文件上传",
            },
          ],
        },
        {
          icon: "el-icon-menu",
          index: "icon",
          title: "缀合处理",
        },
        {
          icon: "el-icon-menu",
          index: "charts",
          title: "组合处理",
        },
        {
          icon: "el-icon-menu",
          index: "6",
          title: "文字处理",
          subs: [
            {
              index: "drag",
              title: "拖拽列表",
            },
            {
              index: "dialog",
              title: "拖拽弹框",
            },
          ],
        },
      ],
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    },
  },
  methods: {
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  left: 0;
  top: 0;
  color: #fff;
  background-color: #242f42;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}

.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
