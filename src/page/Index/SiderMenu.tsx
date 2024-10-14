import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  ApartmentOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  GroupOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

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

type OpenKeyAndSelectedKey = {
  openKey: string;
  selectedKey: string;
};

const items: MenuItem[] = [
  getItem('业务管理', 'business', <ApartmentOutlined />),
  getItem('部署包管理', 'package-manage', <DeploymentUnitOutlined />, [
    getItem(<Link to="/package-manage/list">部署包</Link>, 'package'),
    getItem(<Link to="/package-manage/config">部署配置单</Link>, 'config'),
  ]),
  getItem('后台管理', 'admin', <SettingOutlined />, [
    getItem(<Link to="/admin/cluster">集群管理</Link>, 'clusters'),
  ]),
  getItem('资源组管理', 'resource', <GroupOutlined />),
];

const SiderMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const getOpenKeyAndSelectedKey = (path: string): OpenKeyAndSelectedKey => {
    let ret: OpenKeyAndSelectedKey = {
      openKey: '',
      selectedKey: '',
    };

    if (path.startsWith('/')) {
      path = path.substring(1);
      if (path !== '') {
        const split: string[] = path.split('/');

        ret.openKey = split[0];
        ret.selectedKey = split[1];
      }
    }

    return ret;
  };

  const keys: OpenKeyAndSelectedKey = getOpenKeyAndSelectedKey(
    useLocation().pathname
  );
  const openKey: string = keys.openKey !== '' ? keys.openKey : 'package-manage';
  const selectedKey: string =
    keys.selectedKey !== '' ? keys.selectedKey : 'package';

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="bg-white h-[64px] flex justify-center items-center">
        <span className="text-lg">云原生业务管理平台</span>
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultOpenKeys={[openKey]}
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        items={items}
        className="mt-4"
      />
    </Layout.Sider>
  );
};

export default SiderMenu;
