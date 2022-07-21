/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 14:03:50
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 15:12:14
 */
import { Outlet, history } from "@umijs/max";
import { Layout, Button } from 'antd'

const { Header, Content } = Layout

const BasicLayout = () => {
    return (
        <Layout style={{padding:10}} >
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default BasicLayout;