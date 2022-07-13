/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 09:42:26
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-13 10:39:07
 */
import { defineConfig } from "@umijs/max";
import defaultSettings from './defaultSettings';
import routes from "./routes";

export default defineConfig({
  npmClient: "pnpm",
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    // title: 'title',
    // locale: true,
    // ...defaultSettings,

  },
  routes,
  proxy: {
    "/api": {
      target: "http://localhost:3000/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  // title:"Blog"
});
