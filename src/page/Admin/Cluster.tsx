import { theme } from 'antd';

const Cluster = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      集群管理
    </div>
  );
};

export default Cluster;
