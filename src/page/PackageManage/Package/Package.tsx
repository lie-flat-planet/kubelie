import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceList from './Service/ServiceList';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export const PackageIdQueryKey = 'packageId';

const Package = () => {
  // const { id } = useParams<{ id: string }>();
  // const numericId = id ? parseInt(id, 10) : undefined;

  const searchParams = new URLSearchParams(window.location.search);
  const packageId = searchParams.get(PackageIdQueryKey);
  const numericId = packageId ? parseInt(packageId, 10) : undefined;

  return (
    <div>
      {/* 部署包详情 */}
      {numericId !== undefined && <PackageInfo id={numericId} />}
      <br />

      {/* 服务列表 */}
      <ServiceList />
    </div>
  );
};

export default Package;

// package info
const PackageInfo = ({ id }: { id: number }) => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '部署包id',
      children: id,
    },
    {
      key: '2',
      label: 'Billingd',
      children: 'Prepaidd',
    },
    {
      key: '3',
      label: 'Time',
      children: '18:00:00',
    },
    {
      key: '4',
      label: 'Amount',
      children: '$80.00',
    },
  ];

  return (
    <div className="p-6 min-h-[100px] border border-solid bg-white mx-2">
      <Descriptions
        title={`部署包详情${id}`}
        size="small"
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
      />
    </div>
  );
};
