import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './page/Index';
import PackageList from './page/PackageManage/Package/PackageList';
import Config from './page/PackageManage/Config/Config';
import Cluster from './page/Admin/Cluster';
import Package from './page/PackageManage/Package/Package';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/package-manage/package" replace />, // Automatically redirect to /home
  },
  {
    path: '/package-manage',
    element: <Index />,
    children: [
      // package
      {
        path: 'package',
        element: <PackageList />,
      },
      {
        path: '/package-manage/package/:id',
        element: <Package />,
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
