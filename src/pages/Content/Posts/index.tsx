/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 16:20:02
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-04 16:07:22
 */
import { PlusOutlined } from '@ant-design/icons'
import { useModel } from '@umijs/max'
import { Button, Layout } from 'antd'
import React from 'react'
const { Content, Header } = Layout

const Post: React.FC = () => {
  const { loading } = useModel("Content.Posts.model")
  const openNew = () => {

  }
  console.log(loading);

  return (
    <Layout>
      <Header>
        <Button
          type='primary'
          onClick={openNew}
          icon={<PlusOutlined />}
        >新建动态</Button>
      </Header>
      <Content>

      </Content>
    </Layout>
  )
}

export default Post
