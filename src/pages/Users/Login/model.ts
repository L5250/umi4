/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 14:49:51
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-04 16:29:58
 */

import service from "@/services/user";
import { useState, useCallback } from "react";
import { useRequest } from "@umijs/max";
import { message } from "antd";
import { useModel,history } from "@umijs/max";

export default () => {
  // console.log(process)
  // console.log(process.env)
  // console.log(process.env.api)

  const { initialState, setInitialState }: any = useModel("@@initialState")

  const loginReq = useRequest((params?: any) => service.login(params), {
    manual: true,
    onSuccess: (data) => {
      setInitialState({ ...initialState, currentUser: data.userInfo })
      localStorage.setItem("token", data.access_token)
      
      setTimeout(() => {
        history.push('home')
    }, 100);
    }
  })

  const loading = loginReq.loading
  return {
    loading,
    loginReq,
  };
};
