/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 09:52:54
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 17:17:17
 */
// import { request } from "@/utils";
import { request } from "@umijs/max";
const { api } = process.env

const service = {
  getAllUser(params?: any) {
    return request(`${api}/user/getAllUsers`, { method: "get", data: params });
  },
  login(params?: any) {
    console.log(params);
    return request(`${api}/user/login`, { method: "post", data: params });
  },
  register(params?: any) {
    return request(`${api}/user/register`, { method: "post", data: params });
  },
};

export default service;
