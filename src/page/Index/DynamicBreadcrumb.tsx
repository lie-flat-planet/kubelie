import { Breadcrumb } from 'antd';
import { useLocation, matchPath, Link } from 'react-router-dom';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

const breadcrumbNameMap: { [key: string]: string } = {
  '/package-manage/package': '部署包',
  '/package-manage/package/:id': '部署包详情',
  '/package-manage/config': '部署配置单',
  '/admin/cluster': '集群管理',
};

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  // 循环
  const breadcrumbItems = pathSnippets.map((_, index): ItemType => {
    const url: string = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    const match = Object.keys(breadcrumbNameMap).find((path: string) =>
      matchPath({ path, end: true }, url)
    );

    const breadcrumbName = match ? breadcrumbNameMap[match] : '';
    if (!breadcrumbName) {
      return { title: <span className="text-xs">{''}</span> };
    }

    if (index === pathSnippets.length - 1) {
      // items.push();
      return {
        title: (
          <span className="text-xs font-bold text-black">{breadcrumbName}</span>
        ),
      };
    }

    return {
      title: (
        <Link className="text-xs" to={url}>
          {breadcrumbName}
        </Link>
      ),
    };
  });

  return (
    <Breadcrumb
      items={breadcrumbItems.filter((item) => item.title !== null)}
      separator={<span className="text-xs">{'>'}</span>}
    />
  );
};

export default DynamicBreadcrumb;
