import { Layout } from 'antd';
import Cnt from './Cnt';
import SiderMenu from './SiderMenu';
import TopHeader from './TopHeader';
import BottomFooter from './BottomFooter';

const Index = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu />

      <Layout>
        <TopHeader />
        <Cnt />
        <BottomFooter />
      </Layout>
    </Layout>
  );
};

export default Index;
