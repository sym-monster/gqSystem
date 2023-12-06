import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/common/home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/login/login.vue"),
      meta: { title: "登录页面" },
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
          path: "/gqcheck",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/check.vue"),
          meta: { title: "批量查询" },
        },
        {
          //
          path: "/edit",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/edit.vue"),
          meta: { title: "信息修改" },
        },
        {
          //
          path: "/bhedit",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/bhedit.vue"),
          meta: { title: "查询信息修改" },
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
        {
          //
          path: "/gqinsert",
          component: () =>
            import(
              /* webpackChunkName: "editor" */ "../views/login/insert.vue"
            ),
          meta: { title: "信息录入" },
        },
        {
          //
          path: "/gqinsert2",
          component: () =>
            import(
              /* webpackChunkName: "editor" */ "../views/login/insert2.vue"
            ),
          meta: { title: "释文信息" },
        },
        {
          //
          path: "/gqinsert3",
          component: () =>
            import(
              /* webpackChunkName: "editor" */ "../views/login/insert3.vue"
            ),
          meta: { title: "释文信息" },
        },
        {
          //
          path: "/ceshi2",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/test2.vue"),
          meta: { title: "释文信息" },
        },
        {
          //
          path: "/ceshi3",
          component: () =>
            import(/* webpackChunkName: "editor" */ "../views/login/test3.vue"),
          meta: { title: "释文信息" },
        },
      ],
    },
  ],
});
