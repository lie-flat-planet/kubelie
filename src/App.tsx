import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './page/Index';
import PackageList from './page/PackageManage/Package/PackageList';
import Config from './page/PackageManage/Config/Config';
import Cluster from './page/Admin/Cluster';
import Package from './page/PackageManage/Package/Package';
import { Navigate } from 'react-router-dom';
import ServiceDetail from './page/PackageManage/Package/Service/ServiceDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/package-manage/list" replace />, // Automatically redirect to /home
  },
  {
    path: '/package-manage',
    element: <Index />,
    children: [
      // package
      {
        path: 'list',
        element: <PackageList />,
      },
      {
        path: '/package-manage/list/detail',
        element: <Package />,
      },
      {
        path: '/package-manage/list/detail/service-detail',
        element: <ServiceDetail />,
      },

      // config
      {
        path: 'config',
        element: <Config />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Index />,
    children: [
      {
        path: 'cluster',
        element: <Cluster />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
