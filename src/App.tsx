import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './page/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index message="你好" />,
    children: [],
  },
  {
    path: 'package-manage/package',
    element: <Index message="pacgae" />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
