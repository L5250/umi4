/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 14:49:51
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-20 10:50:23
 */

import service from "@/services/user";
import { useState, useCallback } from "react";
import { useRequest } from "@umijs/max";
import { message } from "antd";

export default () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);

  // console.log(process)
  // console.log(process.env)
  // console.log(process.env.api)

  const getData = useCallback(async () => {
    const { data, success ,msg} = await service.getAllUser();
    if (!success) { message.warn(msg); return }
    return data 
  }, [])

  return {
    loading,
    userData,
    getData,
  };
};
