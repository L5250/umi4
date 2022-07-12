/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 09:38:43
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 09:39:34
 */
import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
