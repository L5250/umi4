/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-13 10:48:17
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-19 14:19:44
 */
import { history } from '@umijs/max';
import { Link } from '@umijs/max';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';



const RightContent: React.FC = () => {

    const logout = () => {
        history.push('/login')
        localStorage.removeItem('token')
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '3',
                    label: (
                        <Button onClick={logout}>
                            退出登录
                        </Button>
                    ),
                },]}
        />
    )

    return (
        <div>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
            </Dropdown>
        </div>
    )
}
export default RightContent;