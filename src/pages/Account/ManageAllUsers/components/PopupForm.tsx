import service from '@/services/user'
import { useModel } from '@umijs/max'
import { Form, Input, Modal, Select, Checkbox, Radio } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { getIsMobile } from '@/utils/getBrowser'

const { Option } = Select

export default function PopupForm() {

    const { state: { formData, visible }, setState, updateUserRequest, addUserRequest, getDataRequest } = useModel("Account.ManageAllUsers.model")
    const [form] = Form.useForm();
 
    const save = async () => {
        form.validateFields()
            .then(async values => {
                const data = formData?.id ? await updateUserRequest.run({ ...formData, ...values }) : await addUserRequest.run(values)
                // const data = formData?.id ? await service.updateUser({ ...formData, ...values }) : await service.register(values)
                console.log(data);
                if (data) {
                    setState({ visible: false })
                    getDataRequest.run()
                    form.resetFields();
                }
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    useEffect(() => {
        form.resetFields();
        form.setFieldsValue({ ...formData, password: "" })
    }, [formData, visible])

    return (
        <Modal title="新增账号" visible={visible}
            onCancel={() => setState({ visible: false })}
            forceRender
            destroyOnClose
            confirmLoading={updateUserRequest.loading || addUserRequest.loading}
            onOk={save}>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
                form={form}
                initialValues={{ isAdmin: false }}
            >
                <Form.Item
                    label="账号名"
                    name="userName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                // hasFeedback
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: '不是正确的E-mail格式!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('您输入的两个密码不匹配!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item> */}

                <Form.Item
                    name="telephone"
                    label="手机"
                    rules={[
                        {
                            pattern: /^1\d{10}$/,
                            message: "手机号格式错误！",
                        },
                    ]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="描述"
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
                <Form.Item
                    name="isAdmin"
                    label="是否管理员"
                    rules={[{ required: true, message: "必选" }]}
                >
                    <Radio.Group>
                        <Radio value={true}>是</Radio>
                        <Radio value={false}>否</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal >
    )
}
