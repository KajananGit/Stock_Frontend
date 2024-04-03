import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import OrderContainer from './containers/OrderContainer';
import HomepageContainer from './containers/HomepageContainer';
import Navigation from './components/Navigation';
import NewOrderedItemForm from './components/NewOrderedItemForm';
import NewOrderContainer from './containers/NewOrderContainer';


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
          element: <OrderContainer />
        },
        {
          path: "/orders/new",
          element: <NewOrderContainer />,
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
      <header>
        <h1>Shelf-A-Warehouse</h1>
        <h3>Fully aware of all your stocking needs!</h3>
      </header>
      
      <RouterProvider router={warehouseRoutes} />
    </>
  );
}

export default App;
