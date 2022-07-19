import service from '@/services/user'
import { useModel } from '@umijs/max'
import { Form, Input, Modal, Select, Checkbox, Radio } from 'antd'
import React from 'react'
import { useEffect } from 'react'

const { Option } = Select

export default function PopupForm() {

    const { visible, setVisible, getData, formData } = useModel("allUsers")
    const [form] = Form.useForm();
    console.log(formData);
    const save = async () => {
        form.validateFields()
            .then(async values => {
                const data = formData?.id ? await service.updateUser({...formData,...values}) : await service.register(values)
                if (data) {
                    setVisible(false)
                    getData()
                    form.resetFields();
                }
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    useEffect(() => {
        console.log(1);
        form.setFieldsValue({ ...formData, password: "" })
    }, [formData])

    return (
        <Modal title="新增账号" visible={visible}
            onCancel={() => setVisible(false)}
            forceRender
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
