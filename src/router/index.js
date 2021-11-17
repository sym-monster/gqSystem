import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/common/home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/gqid",
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/common/home.vue"),
      meta: { title: "" },
      children: [
        {
          path: "/gqid",
          component: () =>
            import(/* webpackChunkName: "table" */ "../views/login/bh.vue"),
          meta: { title: "骨签编号" },
        },
        {
          path: "/gqtxzq",
          component: () =>
            import(/* webpackChunkName: "form" */ "../views/login/txzq.vue"),
          meta: { title: "骨签图像增强" },
        },
        {
          path: "/gqtxqz",
          component: () =>
            import(/* webpackChunkName: "form" */ "../views/login/txqz.vue"),
          meta: { title: "骨签图像去噪" },
        },
        {
          path: "/gqcccl",
          component: () =>
            import(/* webpackChunkName: "form" */ "../views/login/cccl.vue"),
          meta: { title: "骨签尺寸自动测量" },
        },
        {
          path: "/gqtxjz",
          component: () =>
            import(/* webpackChunkName: "form" */ "../views/login/cccl.vue"),
          meta: { title: "骨签图像正射校正" },
        },
        {
          path: "/gqtztq",
          component: () =>
            import(/* webpackChunkName: "form" */ "../views/login/cccl.vue"),
          meta: { title: "骨签图像特征提取" },
        },
        {
          //
          path: "/gqzh",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/zhcl.vue"),
          meta: { title: "组合处理" },
        },
        {
          //
          path: "/gqwz",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/wzcl.vue"),
          meta: { title: "文字处理" },
        },
        {
          //
          path: "/gqzhuihe",
          component: () =>
            import(
              /* webpackChunkName: "editor" */ "../views/login/zhuihecl.vue"
            ),
          meta: { title: "缀合处理" },
        },
      ],
    },
  ],
});
