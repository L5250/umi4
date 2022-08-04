/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 09:27:33
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-04 16:28:37
 */
// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useModel } from '@umijs/max';
import { useState } from 'react';

export default () => {
  // const [name, setName] = useState<string>(DEFAULT_NAME);
  const { initialState } :any= useModel("@@initialState")
  const userInfo = initialState?.currentUser || null
  return {
    // name,
    userInfo,
  };
};

