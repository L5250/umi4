/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-11 14:49:51
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-01 10:41:25
 */

import service from "@/services/user";
import { useModel, useRequest } from "@umijs/max";

export default () => {
  const { loginReq } = useModel("login")

  const registerReq = useRequest((params?: any) => service.register(params), {
    manual: true,
    onSuccess: async (_,params) => {
      await loginReq.run(params[0])
    }
  })

  const loading = registerReq.loading
  return {
    loading,
    registerReq,
  };
};
