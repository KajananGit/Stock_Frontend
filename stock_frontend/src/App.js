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
      path: "/",
      element:<HomepageContainer />
    },
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

  const handleFooterClick = (url) => {
    alert("BLAME THE BACKEND!");
    if (url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 100);
    }
  }
  

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
                    <p><a href="#" onClick={() => handleFooterClick("/Voicy_rick astley.mp4")}>Privacy</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("/Voicy_rick astley.mp4")}>T&Cs</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("/Voicy_rick astley.mp4")}>Accessibility</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("/Voicy_rick astley.mp4")}>Contact Form</a></p>
                    <p><a href="#" onClick={() => handleFooterClick("/Voicy_rick astley.mp4")}>Refund Policy</a></p>
                </div>
                <div className='audio'><AudioPlayer /></div>
      </footer>
      
    </>
  );
}

export default App;
