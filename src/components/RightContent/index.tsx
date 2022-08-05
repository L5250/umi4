/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-13 10:48:17
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-04 15:10:58
 */
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { useModel } from '@umijs/max';
import { Link } from '@umijs/max';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import React from 'react';



const RightContent: React.FC = () => {
    const { initialState } = useModel("@@initialState")

    const logout = () => {
        history.push('/login')
        localStorage.removeItem('token')
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => history.push('/account/center')}>
                            个人中心
                        </a>
                    ),
                    icon: <UserOutlined />,
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => history.push('/account/setting')}>
                            用户设置
                        </a>
                    ),
                    icon: <SettingOutlined />,
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={logout}>
                            退出登录
                        </a>
                    ),
                    icon: <LogoutOutlined />,
                }
            ]}
        />
    )

    return (
        <div>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Avatar
                    draggable
                    src={initialState?.currentUser.avatarUrl}
                >{initialState?.currentUser.userName}</Avatar>
            </Dropdown>
        </div>
    )
}
export default RightContent;