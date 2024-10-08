import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceList from './Service/ServiceList';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const Package = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? parseInt(id, 10) : undefined;

  return (
    <div>
      <div style={{ margin: 12, marginLeft: 12 }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/" style={{ fontSize: '12px' }}>
                  部署包
                </Link>
              ),
            },
            {
              title: (
                <span style={{ fontSize: '12px', color: 'blue' }}>
                  部署包详情
                </span>
              ),
            },
          ]}
        />
      </div>

      {numericId !== undefined && <PackageInfo id={numericId} />}
      <br />
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
    <div
      style={{
        padding: 24,
        minHeight: 100,
        border: '1px solid',
        background: 'white',
      }}
    >
      <Descriptions
        title="部署包详情"
        size="small"
        // bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
      />
    </div>
  );
};
