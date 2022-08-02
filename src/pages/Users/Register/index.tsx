/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-06 15:54:03
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-01 10:35:04
 */
import {
  AlipayCircleOutlined,
  LockOutlined, TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined
} from '@ant-design/icons';
import {
  LoginForm, ProFormText
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { message, Space, Tabs } from 'antd';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import service from '@/services/user'
import { useModel } from '@umijs/max';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};


export default () => {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  const { registerReq } = useModel("register")

  const onFinish = async (e: any) => {
    const data = await registerReq.run(e)
    if (data.success) {
      message.success("注册成功")
      await registerReq.run()
    }
  }
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        onFinish={onFinish}
        submitter={{
          searchConfig: {
            submitText: '注册',
          },
        }}
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="Github"
        subTitle="全球最大同性交友网站"
        actions={
          <Space>
            其他登录方式
            <AlipayCircleOutlined style={iconStyles} />
            <TaobaoCircleOutlined style={iconStyles} />
            <WeiboCircleOutlined style={iconStyles} />
          </Space>
        }
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
        </Tabs>
        <>
          <ProFormText
            name="userName"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>

        <div
          style={{
            marginBottom: 24,
          }}
        >
          <Link to='/login'>登录</Link>
        </div>
      </LoginForm>
    </div>
  );
};