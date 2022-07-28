/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 09:42:26
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-28 11:26:34
 */
import { defineConfig } from "@umijs/max";
import defaultSettings from "./defaultSettings";
import routes from "./routes";

export default defineConfig({
  npmClient: "pnpm",
  antd: {},
  access: {},
  model: {},
  initialState: {},
  /**
   * 构建时配置可以为 useRequest 配置 dataField ，
   * 该配置的默认值是 data。该配置的主要目的是方便 useRequest 直接消费数据。
   * 如果你想要在消费数据时拿到后端的原始数据，需要在这里配置 dataField 为 '' 。
   */
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
  tailwindcss: {},
});
