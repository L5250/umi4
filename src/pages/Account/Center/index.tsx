/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-21 14:36:15
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-21 16:04:28
 */
import { UserOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max'
import { Layout, Avatar } from 'antd';
import React from 'react'

const { Content } = Layout

const Center: React.FC = () => {

    const { initialState } = useModel("@@initialState")
    console.log(initialState);
    console.log(initialState?.currentUser.userName);
    return (
        <Layout>
            <Content>
                <Avatar
                    draggable
                    // icon={<UserOutlined />}
                    size={64}
                    src={initialState?.currentUser.avatarUrl}
                >{initialState?.currentUser.userName}</Avatar>
            </Content>
        </Layout>
    )
}
export default Center