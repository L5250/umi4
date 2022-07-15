/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 15:49:32
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 15:49:39
 */
import React, { useEffect } from 'react'
import service from '@/services/user'
import { Table, Layout, TableColumnsType } from 'antd'
import { useModel } from '@umijs/max'

const { Content, Header } = Layout

const ManageAllUsers = () => {
  const { data } = useModel("Users.ManageAllUsers.model")
  const getAllUsers = async () => {
    const data = await service.getAllUser()
    console.log(data);
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const columns: TableColumnsType<{ a: number }> | undefined = [
    { dataIndex: "userName", title: "用户名" },
    { dataIndex: "password", title: "密码" },
    { dataIndex: "isAdmin", title: "是否管理员" },
  ]
  return (
    <Layout>
      <Content>
        <Table
          columns={columns}
          dataSource={data || []}
          rowKey="id"
        />
      </Content>
    </Layout>
  )
}

export default ManageAllUsers
