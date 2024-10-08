import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

// content
const Cnt = () => {
  return (
    <Content
      style={{
        margin: '10px 16px',
        background: 'white',
        borderRadius: '10px 10px',
      }}
    >
      <Outlet />
    </Content>
  );
};

export default Cnt;
