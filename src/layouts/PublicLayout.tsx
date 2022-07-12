/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 14:03:50
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 14:05:16
 */
import { Outlet } from "@umijs/max";

const Layout = () => {
    return (
        <div>
            <h1>公共layout</h1>
            <Outlet />
        </div>
    );
};

export default Layout;