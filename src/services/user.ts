/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 09:52:54
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-20 17:19:06
 */
// import { request } from "@/utils";
// import { request } from "@umijs/max";
import request from "@/utils/request";
const { api } = process.env

const service = {
  // 获取所有用户
  getAllUser(params?: any) {
    return request.get(`${api}/user/getAllUsers`, params);
    // return request(`${api}/user/getAllUsers`, { method: "get",  params });
  },
  // 获取用户byname
  getUserByName(params: string) {
    return request.get(`${api}/user/getUserByName`,  params )
    // return request(`${api}/user/getUserByName`, { method: "get",  params })
  },
  // 获取用户byname
  validateToken() {
    const data = request.get(`${api}/user/validateToken`)
    // const data = request(`${api}/user/validateToken`, { method: "get" })
    return data
  },
  // 登录
  login(params?: any) {
    return request.post(`${api}/user/login`, params);
    // return request(`${api}/user/login`, { method: "post", data: params });
  },
  // 注册
  register(params?: any) {
    return request.post(`${api}/user/register`, params);
    // return request(`${api}/user/register`, { method: "post", data: params });
  },
  // 注册
  updateUser(params?: any) {
    return request.post(`${api}/user/update`, params);
    // return request(`${api}/user/update`, { method: "post", data: params });
  },
  // 删除用户
  deleteUser(params?: any) {
    return request.post(`${api}/user/delete`,params);
    // return request(`${api}/user/delete`, { method: "post", data: params });
  },
};

export default service;
