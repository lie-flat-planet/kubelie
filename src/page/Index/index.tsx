import { Layout } from 'antd';
import Cnt from './Cnt';
import SiderMenu from './SiderMenu';
import TopHeader from './TopHeader';
import BottomFooter from './BottomFooter';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import DynamicBreadcrumb from './DynamicBreadcrumb';

const Index = () => {
  return (
    <Layout style={{ minHeight: '100vh', borderRadius: '10px 0px 0px' }}>
      <SiderMenu />

      <Layout>
        <TopHeader />
        <div className="mt-1 ml-3">
          {/* 面包屑 */}
          <DynamicBreadcrumb />
        </div>
        <Cnt />
        <BottomFooter />
      </Layout>
    </Layout>
  );
};

export default Index;
