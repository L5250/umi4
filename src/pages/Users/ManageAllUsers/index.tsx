/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 15:49:32
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-20 17:03:45
 */
import React, { useEffect, useState } from 'react'
import service from '@/services/user'
import { Table, Layout, TableColumnsType, Button, Modal, Form, Input, Space } from 'antd'
import { useModel } from '@umijs/max'
import PopupForm from './components/PopupForm'
import { useRequest } from '@umijs/max'

const { Content, Header } = Layout

const ManageAllUsers = () => {
  const { state: { dataSource }, setState, getDataRequest, deleteUserRequest, loading } = useModel("allUsers")
  // const { initialState,loading } = useModel('@@initialState')
  // console.log(initialState,loading);
  console.log(loading);
  // 删除用户
  const deleteUser = async (record: any) => {

    Modal.confirm({
      title: `确认删除用户名：${record.userName}`,
      onOk: async () => {
        await deleteUserRequest.run({ id: record.id })
        await getDataRequest.run()
      }
    })
  }
  // 注册新用户
  const addUser = async () => {
    await getDataRequest.run({ name: 123 })
    setState({ formData: null, visible: true })
  }
  // 
  const edit = async (params: any) => {
    setState({ formData: params, visible: true })

  }
  useEffect(() => {
    (async function () {
      await getDataRequest.run()
    })()
  }, [])

  const columns: TableColumnsType<{ a: number }> | undefined = [
    { dataIndex: "userName", align: "center", title: "用户名" },
    { dataIndex: "password", align: "center", title: "密码" },
    { dataIndex: "isAdmin", align: "center", title: "是否管理员", render: (text) => text ? "是" : "否" },
    {
      dataIndex: "", title: "操作",
      align: "center",
      fixed: "right",
      render: (text, record) => {
        return <Space>
          <Button type='primary' onClick={() => edit(record)}>编辑</Button>
          <Button onClick={() => deleteUser(record)}>删除</Button>
        </Space>
      }
    },
  ]
  return (
    <Layout>
      <Header><Button type='primary' onClick={addUser}>注册新用户</Button></Header>
      <Content>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource || []}
          rowKey="id"
        />
      </Content>
      <PopupForm />
    </Layout>
  )
}

export default ManageAllUsers
