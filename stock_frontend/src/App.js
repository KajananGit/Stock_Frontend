import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import OrderContainer from './containers/OrderContainer';
import HomepageContainer from './containers/HomepageContainer';
import Navigation from './components/Navigation';
import NewOrderedItemForm from './components/NewOrderedItemForm';
import NewOrderContainer from './containers/NewOrderContainer';
import logo from "./assets/logos/logo-horizontal.png";
import AudioPlayer from './AudioPlayer';


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
        <img src={logo} alt='logo'/>
        <div className='audio'><AudioPlayer /></div>
        
      </header>
      
      <RouterProvider router={warehouseRoutes} />
      
    </>
  );
}

export default App;
