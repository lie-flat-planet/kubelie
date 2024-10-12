import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

// content
const Cnt = () => {
  return (
    <Content className="m-[5px_16px] bg-white rounded-[10px]">
      <Outlet />
    </Content>
  );
};

export default Cnt;
