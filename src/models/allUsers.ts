/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 14:49:51
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-19 16:54:00
 */

import service from "@/services/user";
import { useState, useCallback } from "react";
import { useRequest } from "@umijs/max";
import { message } from "antd";

type T ={
    id:string,
    password:string,
    userName:string,
}

export default () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<T|null>(null);

  const getData = async () => {
    const { data} = await service.getAllUser();
    setAllUsersData(data)
    return data 
  }

  return {
    visible,
    setVisible,
    allUsersData,
    getData,
    formData,
    setFormData
  };
};
