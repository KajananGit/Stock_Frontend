import Navigation from "../components/Navigation";
import HomepageStyle from "../styles/HomepageStyle.css";
import logo from "../assets/logos/logo-vertical.png";

const HomepageContainer = () => {
    
    
    return ( 
        <section className="homepage">
            <img src={logo} alt="logo"></img>
            <section className="homepage-nav"><Navigation /></section>
        </section>



     );
}
 
export default HomepageContainer;