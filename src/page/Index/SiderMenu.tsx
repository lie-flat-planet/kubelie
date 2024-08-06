import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  ApartmentOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  GroupOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import type { MenuProps } from 'antd';

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

const SiderMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider
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
    </Layout.Sider>
  );
};

export default SiderMenu;
