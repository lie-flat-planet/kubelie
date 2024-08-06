import { Layout, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const TopHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
      <div>
        <span
          style={{
            float: 'right',
          }}
        >
          欢迎admin
          <span
            style={{
              marginRight: '20px',
              marginLeft: '5px',
            }}
          >
            <UserOutlined style={{ fontSize: '30px', color: '#08c' }} />
          </span>
        </span>
      </div>
    </Layout.Header>
  );
};

export default TopHeader;
