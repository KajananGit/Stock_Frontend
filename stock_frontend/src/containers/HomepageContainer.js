import { useEffect } from "react";

import Navigation from "../components/Navigation";
import HomepageStyle from "../styles/HomepageStyle.css";
import logo from "../assets/logos/logo-vertical.png";
import forklift from "../assets/forklift.png"

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
            <div>
                <img src={forklift} alt="forklift carrying in logo" id="forklift"></img>
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
            <section className="homepage-nav"><Navigation /></section>
        </section>



     );
}
 
export default HomepageContainer;