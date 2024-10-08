import React, { useState, useEffect } from 'react';
import { Table, Pagination, theme, Button, Space } from 'antd';
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
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/package/${record.id}`}>View Details</Link>
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
];

const PackageList = () => {
  const pageSize = 2;

  const [packages, setPackages] = useState<Package[]>([]);
  const [current, setCurrent] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    // Simulating API call
    const fetchPackages = () => {
      setPackages(mockData);
      setTotal(mockData.length);
    };

    fetchPackages();
  }, []);

  const getPaginatedData = () => {
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return packages.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <h1>Package List</h1>
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

export default PackageList;
