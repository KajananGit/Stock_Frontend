import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import OrderContainer from './containers/OrderContainer';
import HomepageContainer from './containers/HomepageContainer';
import Navigation from './components/Navigation';
import NewOrderedItemForm from './components/NewOrderedItemForm';
import NewOrderContainer from './containers/NewOrderContainer';
import logo from "./assets/logos/logo-horizontal.jpg";
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

  const handleFooterClick = () => {
    alert("Blame the backend!");
};

  return (
    <>
      <header>
        <img src={logo} alt='Shelf a warehouse logo'/>
      </header>


      <RouterProvider router={warehouseRoutes} />
      
      <footer>
      <div className="footer-links">
                    <p>© 2024 Shelf-A-Warehouse</p>
                    <p><a  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"onClick={handleFooterClick}>Privacy</a></p>
                    <p><a  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"onClick={handleFooterClick}>T&Cs</a></p>
                </div>
                <div className='audio'><AudioPlayer /></div>
      </footer>


      
    </>
  );
}

export default App;
