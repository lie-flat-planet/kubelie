import React from 'react';

import { Layout, theme } from 'antd';
import Cnt from './Cnt';
import SiderMenu from './SiderMenu';

const { Header, Footer } = Layout;

const Index = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu />

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Cnt />

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
