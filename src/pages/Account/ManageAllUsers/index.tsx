/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 15:49:32
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-21 17:39:07
 */
import React, { useEffect, useState } from 'react'
import service from '@/services/user'
import { Table, Layout, TableColumnsType, Button, Modal, Form, Input, Space } from 'antd'
import { useModel } from '@umijs/max'
import PopupForm from './components/PopupForm'
import { useRequest } from '@umijs/max'

const { Content, Header } = Layout

const ManageAllUsers = () => {
  const { state: { dataSource, visible }, setState, getDataRequest, deleteUserRequest, loading, } = useModel("Account.ManageAllUsers.model")
  // const { initialState,loading } = useModel('@@initialState')
  // console.log(initialState,loading);
  // console.log(loading);
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
    setState({ formData: null, visible: true })
  }
  // 更新用户信息
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
    { dataIndex: "password", width: 100, ellipsis: true, align: "center", title: "密码", render: () => "****" },
    { dataIndex: "isAdmin", align: "center", title: "是否管理员", render: (text) => text ? "是" : "否" },
    { dataIndex: "description", align: "center", title: "描述", },
    {
      dataIndex: "isAdmin",
      title: "操作",
      align: "center",
      fixed: "right",
      width: 200,
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
          bordered
        />
      </Content>
      <PopupForm />
    </Layout>
  )
}

export default ManageAllUsers
