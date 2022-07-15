/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-13 10:48:17
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-13 12:05:02
 */
import { Link } from '@umijs/max';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';



const RightContent: React.FC = () => {

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link to='/login' >
                            1st menu item
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link to='/login'>
                            2nd menu item
                        </Link>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <Link to='/login' >
                            退出登录
                        </Link>
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