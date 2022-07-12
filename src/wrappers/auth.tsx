/*
 * @Author: L5250
 * @Description: 
 * @Date: 2022-07-06 16:31:49
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 12:03:24
 */
import { Navigate, Outlet } from '@umijs/max'

export default (props: any) => {
    // const { isLogin } = useAuth();
    const isLogin = true
    if (isLogin) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}