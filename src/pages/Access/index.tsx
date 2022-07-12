/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-12 09:27:33
 * @LastEditors: L5250
 * @LastEditTime: 2022-07-12 15:36:28
 */
import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  console.log(access);
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
