import React, { useState, useEffect } from 'react';
import { Table, Pagination, theme, Space } from 'antd';
import { Link } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';

interface Package {
  id: string;
  name: string;
  version: string;
  description: string;
}

const columns: ColumnsType<Package> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record: Package) => (
      <Space size="middle">
        <Link to={`/package-manage/package/${record.id}`}>View Details</Link>
      </Space>
    ),
  },
];

// Mock data
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

const PackageListTable = () => {
  const pageSize: number = 10;

  const [packages, setPackages] = useState<Package[]>([]);
  const [current, setCurrent] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    // Simulating API call
    const fetchPackages = (): void => {
      setPackages(mockData);
      setTotal(mockData.length);
    };

    fetchPackages();
  }, []);

  const getPaginatedData = (): Package[] => {
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return packages.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number): void => {
    setCurrent(page);
  };

  return (
    <div
      style={{
        paddingLeft: 10,
        // minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <h2>部署包</h2>
      <Table
        columns={columns}
        dataSource={getPaginatedData()}
        pagination={false}
      />
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

export default PackageListTable;
