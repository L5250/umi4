/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 10:07:56
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-21 14:48:33
 */
// component: '@/layouts/BasicLayout',
// layout: false,(插件layout启用时可禁用)
const routes = [
  { path: "/", redirect: "/home" },
  {
    title: "登录",
    path: "/login",
    component: "Users/Login",
    layout: false
  },
  {
    title: "注册",
    path: "/register",
    component: "Users/Register",
    layout: false
  },
  { path: '/home', component: 'Home', name: "首页", icon: "home" },
  {
    path: '/content',
    name: "内容管理",
    icon: "home",
    component:"@/layouts/BasicLayout",
    routes: [
      { path: '/content/post', component: 'Content/Posts', name: "开启动态" },
    ],
  },
  /**
   * 个人中心
   */
  {
    path: "/account",
    name: "账号管理",
    icon: "user",
    component:"@/layouts/BasicLayout",
    routes: [
      {
        title: "个人中心",
        path: "/account/center",
        component: "Account/Center",
        name: "个人中心",
        icon: "question",
      },
      {
        title: "用户设置",
        path: "/account/setting",
        component: "Account/Setting",
        name: "用户设置",
      },
      {
        title: "管理用户",
        path: "/account/manageAllUsers",
        component: "Account/ManageAllUsers",
        name: "管理用户",
      },
    ]
  },
];
export default routes;
