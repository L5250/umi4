/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 14:49:51
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-21 14:42:14
 */

import service from "@/services/user";
import { useState, useCallback } from "react";
import { useRequest } from "@umijs/max";
import { message } from "antd";
import { useSetState } from 'ahooks'

interface State {
  dataSource: [];
  visible: boolean;
  formData: any,
  [key: string]: any;
}

export default () => {
  const [state, setState] = useSetState<State>({
    dataSource: [],
    visible: false,
    formData: null
  })
  /**
   * 获取所有人员
   * @params
   */
  const getDataRequest = useRequest((params?: any) => service.getAllUser(params), {
    manual: true,
    onSuccess: (data) => { setState({ dataSource: data }) }
  })
  // 新增用户
  const addUserRequest = useRequest((params?: any) => service.register(params), { manual: true })
  // 更新信息
  const updateUserRequest = useRequest((params?: any) => service.updateUser(params), { manual: true })
  // 删除用户
  const deleteUserRequest = useRequest((params?: any) => service.deleteUser(params), { manual: true })

  const loading = getDataRequest.loading
  return {
    loading,
    state,
    setState,
    getDataRequest,
    deleteUserRequest,
    addUserRequest,
    updateUserRequest
  };
};
