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
import { Avatar, Button, Checkbox, Form, Input, Layout, Upload } from 'antd'
import React, { useEffect } from 'react'
import { saveUserInfo } from './service'
import styles from './style.less'
import UploadAvatar from './components/UploadAvatar'

const { Content } = Layout

const Setting: React.FC = () => {
    const [form] = Form.useForm()
    const { initialState, setInitialState }: any = useModel("@@initialState")
    const { currentUser: { userName, avatarUrlBase64 } } = initialState
    const { saveUserInfoReq, loading } = useModel("Account.Setting.model")
    console.log(initialState);
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const { data } = await saveUserInfoReq.run({ ...values, id: initialState?.currentUser.id })
        console.log(data);
        setInitialState({ ...initialState, currentUser: data })
        setInitialState({ ...initialState, currentUser: { userName: 222 } })
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
            <Content className={styles.content}>
                <UploadAvatar />
                <Avatar size={64}>{avatarUrlBase64 || userName}</Avatar>
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
                        label="?????????"
                        name="userName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="??????"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                        {/* <Input.Password /> */}
                    </Form.Item>
                    <Form.Item
                        label="??????"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="??????"
                        name="telephone"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="????????????"
                        name="description"
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit"
                            style={{ marginTop: 12 }}
                            loading={loading}>
                            ??????
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}
export default Setting
