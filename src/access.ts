/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 09:27:33
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-09 15:49:02
 */
export default (initialState: any) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://next.umijs.org/docs/max/access
  const isAdmin = initialState?.currentUser?.isAdmin
  return {
    isAdmin,
  };
};
