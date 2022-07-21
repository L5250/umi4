/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 09:52:54
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-21 11:30:46
 */
// import { request } from "@/utils";
import { request } from "@umijs/max";
const { api } = process.env

const service = {
  // 获取所有用户
  getAllUser(params?: any) {
    return request(`${api}/user/getAllUsers`, { method: "get", data: params });
  },
  // 获取用户byname
  getUserByName(params: string) {
    return request(`${api}/user/getUserByName`, { method: "get", data: params })
  },
  // 获取用户byname
  validateToken() {
    const data = request(`${api}/user/validateToken`, { method: "get" })
    return data
  },
  // 登录
  login(params?: any) {
    return request(`${api}/user/login`, { method: "post", data: params });
  },
  // 注册
  register(params?: any) {
    return request(`${api}/user/register`, { method: "post", data: params });
  },
  // 注册
  updateUser(params?: any) {
    return request(`${api}/user/update`, { method: "post", data: params });
  },
  // 删除用户
  deleteUser(params?: any) {
    return request(`${api}/user/delete`, { method: "post", data: params });
  },
};

export default service;
