import React, { useState, useEffect } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import {
  Avatar,
  List,
  Space,
  Descriptions,
  DescriptionsProps,
  Pagination,
  Table,
  TableProps,
} from 'antd';
import { Link } from 'react-router-dom';

const data = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  href: 'https://ant.design',
  title: `部署包 ${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

interface Package {
  id: string;
  name: string;
  version: string;
  description: string;
}

const mockData: Package[] = [
  {
    id: '1',
    name: 'Package A',
    version: '1.0.0',
    description: 'This is package A',
  },
  {
    id: '2',
    name: 'Package B',
    version: '2.1.0',
    description: 'This is package B',
  },
  {
    id: '3',
    name: 'Package C',
    version: '2.2.0',
    description: 'This is package C',
  },
  {
    id: '4',
    name: 'Package D',
    version: '3.0.0',
    description: 'This is package D',
  },
  {
    id: '5',
    name: 'Package E',
    version: '1.5.0',
    description: 'This is package E',
  },
  {
    id: '6',
    name: 'Package F',
    version: '1.5.1',
    description: 'This is package F',
  },
  {
    id: '7',
    name: 'Package G',
    version: '1.5.0',
    description: 'This is package G',
  },
  {
    id: '8',
    name: 'Package H',
    version: '1.5.0',
    description: 'This is package H',
  },
  {
    id: '9',
    name: 'Package 9',
    version: '1.5.0',
    description: 'This is package 9',
  },
  {
    id: '10',
    name: 'Package 10',
    version: '1.5.0',
    description: 'This is package 10',
  },
  {
    id: '11',
    name: 'Package 11',
    version: '1.5.0',
    description: 'This is package 11',
  },
  {
    id: '12',
    name: 'Package 12',
    version: '1.5.0',
    description: 'This is package 12',
  },
];

const ListPackage = () => {
  const [pageSize, total] = [10, 12];
  const [current, setCurrent] = useState<number>(1);

  const handlePageChange = (page: number): void => {
    setCurrent(page);
  };

  // TODO 分页
  const getPaginatedData = (): Package[] => {
    return mockData;
  };

  return (
    <div>
      <div>
        {getPaginatedData().map((pkgItem: Package) => (
          <PackageItem key={pkgItem.id} pkg={pkgItem} />
        ))}
      </div>

      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
        style={{ marginTop: 16, textAlign: 'right' }}
      />
    </div>
  );
};

export default ListPackage;

const PackageItem = ({ pkg }: { pkg: Package }) => {
  const labelToValue: { [key: string]: string } = {
    唯一编号: pkg.id,
    名字: pkg.name,
    版本: pkg.version,
    描述: pkg.description,
    运维负责人: pkg.description,
  };

  const items: DescriptionsProps['items'] = Object.entries(labelToValue).map(
    ([label, value]) => ({
      key: label,
      label: <span style={{ fontSize: 12 }}>{label}</span>,
      children: <span style={{ fontSize: 10, marginTop: 3 }}>{value}</span>,
    })
  );

  return (
    <div
      style={{
        margin: 10,
        padding: '1px 10px',
        backgroundColor: 'rgba(238, 242, 249, 0.85)',
      }}
    >
      <div style={{ marginTop: 10, marginBottom: 5 }}>
        <Link to={`/package-manage/package/${pkg.id}`}>
          <span style={{ fontSize: 16 }}>部署包{pkg.id}</span>
        </Link>
      </div>

      <Descriptions
        size="small"
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        style={{
          padding: 10,
          marginBottom: 10,
          background: 'white',
          borderRadius: 10,
        }}
      />
    </div>
  );
};
