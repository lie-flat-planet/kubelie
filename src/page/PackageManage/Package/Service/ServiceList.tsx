import React, { useState } from 'react';
import { Descriptions, DescriptionsProps, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ServiceIdQueryKey } from './ServiceDetail';

interface Service {
  id: string;
  name: string;
  description: string;
}

const mockData: Service[] = [
  {
    id: '1',
    name: 'Service A',
    description: 'This is service A',
  },
  {
    id: '2',
    name: 'Service B',
    description: 'This is service B',
  },
];

const ServiceList = () => {
  return (
    <div>
      {mockData.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;

const ServiceItem = ({ service }: { service: Service }) => {
  const labelToValue: { [key: string]: string } = {
    id: service.id,
    name: service.name,
    description: service.description,
  };

  const items: DescriptionsProps['items'] = Object.entries(labelToValue).map(
    ([label, value]) => ({
      key: label,
      label: <span className="text-sm">{label}</span>,
      children: <span className="text-xs mt-1">{value}</span>,
    })
  );

  return (
    <div className="m-2.5 px-2 py-px bg-[rgba(238,242,249,0.85)] rounded-xl">
      {/* 标题 */}
      <div className="flex px-2 mt-2.5 mb-1.5 ">
        <div>
          <Link
            to={`/package-manage/list/detail/service-detail?${ServiceIdQueryKey}=${service.id}`}
          >
            <span className="text-lg font-bold">服务{service.id}</span>
          </Link>
        </div>

        {/* 删除按钮 */}
        <div className="ml-auto">
          <DeleteButton serviceId={service.id} />
        </div>
      </div>

      {/* 描述 */}
      <Descriptions
        size="small"
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
        className="bg-white rounded-xl p-2.5 mb-2.5"
      />
    </div>
  );
};

// 删除按钮+弹窗
const DeleteButton = ({ serviceId }: { serviceId: string }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const modalText = `是否要删除服务${serviceId}`;

  const showModal = () => {
    setOpen(true);
  };

  // TODO 实现真正的逻辑
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      // Reload the page
      window.location.reload();
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="ml-auto">
      <button className="text-red-500 text-lg">
        <DeleteOutlined onClick={showModal} />
      </button>

      <Modal
        title="删除服务"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};
