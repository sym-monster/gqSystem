<template>
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
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-menu",
          index: "1",
          title: "骨签编号",
          subs: [
            {
              index: "1-1",
              title: "骨签编号类型",
              subs: [
                {
                  index: "gqid",
                  title: "008479号",
                },
                {
                  index: "gqid1",
                  title: "008480号",
                },
              ],
            },
            {
              index: "upload",
              title: "骨签类型",
            },
          ],
        },

        {
          icon: "el-icon-s-platform",
          index: "2",
          title: "预处理",
          subs: [
            {
              index: "gqtxzq",
              title: "骨签图像增强",
            },
            {
              index: "gqtxqz",
              title: "骨签图像去噪",
            },
            {
              index: "gqtxjz",
              title: "骨签图像正射校正",
            },
            {
              index: "gqcccl",
              title: "骨签尺寸自动测量",
            },
            {
              index: "gqccl",
              title: "骨签图像特征提取",
            },
          ],
        },
        {
          icon: "el-icon-s-platform",
          index: "gqzhuihe",
          title: "缀合处理",
        },
        {
          icon: "el-icon-s-platform",
          index: "gqzh",
          title: "组合处理",
        },
        {
          icon: "el-icon-s-release",
          index: "gqwz",
          title: "文字处理",
        },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/body.scss";
.sidebar {
  display: block;
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  -webkit-box-shadow: 2px 0 8px rgb(0, 0, 0);
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: $navmenu;
}
.sidebar > ul {
  height: 100vh;
}
</style>
