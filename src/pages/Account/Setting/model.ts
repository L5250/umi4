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
import { useModel } from "@umijs/max";
import { saveUserInfo } from "./service";

interface State {
    [key: string]: any;
}

export default () => {
    const [state, setState] = useSetState<State>({
        // data: []
    })
    // 新增用户
    const saveUserInfoReq = useRequest((params?: any) => saveUserInfo(params), { manual: true })
  
    const loading = saveUserInfoReq.loading
  
    return {
        loading,
        state,
        setState,
        saveUserInfoReq
    };
};
