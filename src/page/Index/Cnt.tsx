import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

// content
const Cnt = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
      </Breadcrumb>
      <Outlet />
    </Content>
  );
};

export default Cnt;
