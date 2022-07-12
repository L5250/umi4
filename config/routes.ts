/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 10:07:56
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 17:29:08
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
  { path: '/home', component: 'Home', name: "首页" },
  {
    path: '/content',
    name: "内容管理",
    routes: [
      { path: '/content/post', component: 'Content/Posts', name: "开启动态" },
      {
        component: './404',
      },
    ],
  },
  {
    path: "/users",
    name: "账号管理",
    routes: [
      {
        title: "个人中心",
        path: "/users/update",
        component: "Users/Update",
        name: "个人中心",
        layout: false
      },
      {
        title: "管理用户",
        path: "/users/alluser",
        component: "Users/ManageAllUsers",
        name: "管理用户",
        layout: false
      },
    ]
  },

  {
    path: "/404",
    component: "/404",
  },
];
export default routes;
