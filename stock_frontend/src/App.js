import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import OrdersContainer from './containers/OrdersContainer';
import HomepageContainer from './containers/HomepageContainer';
import Navigation from './components/Navigation';
import OrdersList from './components/OrdersList';
import NewOrderForm from './components/NewOrderForm';
import NewOrderedItemForm from './components/NewOrderedItemForm';


function App() {

  const warehouseRoutes = createBrowserRouter([
    {
      path: "/home",
      element:<HomepageContainer />
    },
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "/orders",
          element: <OrdersList />
        },
        {
          path: "/orders/new",
          element: <NewOrderForm />,
          children: [
            {
              path:"/orders/new/addItems",
              element: <NewOrderedItemForm />
            }
          ]
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={warehouseRoutes} />
    </>
  );
}

export default App;
