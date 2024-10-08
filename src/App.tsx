import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './page/Index';
import PackageList from './page/PackageManage/Package/PackageList';
// import PackageL from './page/PackageManage/Package/PackageL';
import Config from './page/PackageManage/Config/Config';
import Cluster from './page/Admin/Cluster';
import Package from './page/PackageManage/Package/Package';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        index: true,
        // path: 'package-manage/package',
        element: <PackageList />,
      },
      {
        path: 'package-manage/config',
        element: <Config />,
      },
      {
        path: 'admin/cluster',
        element: <Cluster />,
      },
      {
        path: '/package-manage/package/:id',
        element: <Package />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
