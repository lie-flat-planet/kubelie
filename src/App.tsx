import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './page/Index';
import Package from './page/PackageManage/Package/Package';
import Config from './page/PackageManage/Config/Config';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        index: true,
        // path: 'package-manage/package',
        element: <Package />,
      },
      {
        path: 'package-manage/config',
        element: <Config />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
