/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 09:32:57
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-09 17:39:54
 */
export default {
  define: {
    // 添加这个自定义的环境变量
    "process.env.UMI_ENV": process.env.UMI_ENV, // * 本地开发环境：dev，qa环境：qa，生产环境prod
    "process.env.name": '自定义namedev',
    "process.env.api": 'http://localhost:3000',
    // "process.env.api": 'https://nest-l5250.vercel.app',
  },
}