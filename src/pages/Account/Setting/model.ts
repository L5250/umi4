/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 14:49:51
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-09 16:17:24
 */

import service from "@/services/user";
import { useState, useCallback } from "react";
import { useRequest } from "@umijs/max";
import { message } from "antd";
import { useSetState } from 'ahooks'
import { useModel } from "@umijs/max";
import { saveUserInfo,uploadAvatar } from "./service";

interface State {
    [key: string]: any;
}

export default () => {
    const [state, setState] = useSetState<State>({
        // data: []
    })
    // 新增用户
    const saveUserInfoReq = useRequest((params?: any) => saveUserInfo(params), { manual: true })
    // 上传头像图片
    const uploadAvatarReq = useRequest((params?: any) => uploadAvatar(params), { manual: true })
  
    const loading = saveUserInfoReq.loading
  
    return {
        loading,
        state,
        setState,
        saveUserInfoReq,
        uploadAvatarReq
    };
};
