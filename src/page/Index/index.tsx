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
      {/* 侧边栏 */}
      <SiderMenu />

      <Layout>
        {/* 顶部 */}
        <TopHeader />
        {/* 面包屑 */}
        <div className="mt-1 ml-3">
          <DynamicBreadcrumb />
        </div>
        {/* 内容 */}
        <Cnt />
        {/* 底部 */}
        <BottomFooter />
      </Layout>
    </Layout>
  );
};

export default Index;
