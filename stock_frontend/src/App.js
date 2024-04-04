import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomepageContainer from './containers/HomepageContainer';
import Navigation from './components/Navigation';
import OrderContainer from './containers/OrderContainer';
import NewOrderedItemForm from './components/NewOrderedItemForm';
import NewOrderContainer from './containers/NewOrderContainer';
import logo from "./assets/logos/logo-horizontal.jpg";
import AudioPlayer from './AudioPlayer';
import BoxOfPuns from './components/BoxOfPuns';


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

  const handleFooterClick = (linkUrl) => {
    alert("BLAME THE BACKEND!")
    window.open(linkUrl, "_blank"); // Open the image in a new tab
  };

  return (
    <>
      <header>
        <img src={logo} alt='Shelf a warehouse logo'/>
        <BoxOfPuns/>
      </header>


      <RouterProvider router={warehouseRoutes} />
      <footer>
      <div className="footer-links">
                    <p>© 2024 Shelf-A-Warehouse</p>
                    <p><a href="#" onClick={() => handleFooterClick("https://www.youtube.com/watch?v=xm3YgoEiEDc")}>Privacy</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("https://www.youtube.com/watch?v=xm3YgoEiEDc")}>T&Cs</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("https://www.youtube.com/watch?v=xm3YgoEiEDc")}>Accessibility</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("https://www.youtube.com/watch?v=xm3YgoEiEDc")}>Contact Form</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("https://www.youtube.com/watch?v=xm3YgoEiEDc")}>Refund Policy</a></p>
                </div>
                <div className='audio'><AudioPlayer /></div>
      </footer>
      
    </>
  );
}

export default App;
