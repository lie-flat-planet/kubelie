import React, { useState } from 'react';
import {
  ApartmentOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  GroupOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  title?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    title,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('业务管理', 'business', <ApartmentOutlined />),
  getItem('部署包管理', 'package-manager', <DeploymentUnitOutlined />, [
    getItem(<Link to="/">部署包</Link>, 'package-package'),
    getItem(
      <Link to="/package-manage/config">部署配置单</Link>,
      'package-config'
    ),
  ]),
  getItem('后台管理', 'admin', <SettingOutlined />),
  getItem('资源组管理', 'resource', <GroupOutlined />),
];

interface MyComponentProps {
  message: string;
}

const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            backgroundColor: 'white',
            lineHeight: '32px',
            textAlign: 'center',
            fontSize: '18px',
            height: '50px',
            marginBottom: '30px',
          }}
        >
          云原生业务管理平台
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultOpenKeys={['package-manager']}
          defaultSelectedKeys={['package-package']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
