/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-21 14:36:29
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-21 17:40:00
 */
import { GridContent } from '@ant-design/pro-components'
import { useModel } from '@umijs/max'
import { useRequest } from '@umijs/max'
import { Avatar, Button, Checkbox, Form, Input, Layout } from 'antd'
import React, { useEffect } from 'react'
import { saveUserInfo } from './service'

const { Content } = Layout

const Setting: React.FC = () => {
    const [form] = Form.useForm()
    const { initialState, setInitialState }: any = useModel("@@initialState")
    const saveUserInfoREQ = useRequest((params) => saveUserInfo(params), { manual: true })
    console.log(initialState);
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const newUserInfo = await saveUserInfoREQ.run({ ...values, id: initialState?.currentUser.id })
        setInitialState({ ...initialState, currentUser: newUserInfo })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        form.setFieldsValue({
            ...initialState?.currentUser,
            password: "123456"
        })
    }, [initialState])

    return (
        <Layout>
            <Content style={{ width: 500 }}>
                {/* <Avatar /> */}
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}

                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="userName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                        {/* <Input.Password /> */}
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="手机"
                        name="telephone"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="我的描述"
                        name="description"
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit"
                            style={{ marginTop: 12 }}
                            loading={saveUserInfoREQ.loading}>
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}
export default Setting
