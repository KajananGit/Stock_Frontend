import { useEffect } from "react";

import Navigation from "../components/Navigation";
import HomepageStyle from "../styles/HomepageStyle.css";
import logo from "../assets/logos/logo-vertical.png";

const HomepageContainer = () => {
    
    useEffect(() => {
        document.body.classList.add('hide-header');

        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('hide-header');
        };
     }, []);
    
    return ( 
        <section className="homepage">
            <img src={logo} alt="logo"></img>
            <section className="homepage-nav"><Navigation /></section>
        </section>



     );
}
 
export default HomepageContainer;