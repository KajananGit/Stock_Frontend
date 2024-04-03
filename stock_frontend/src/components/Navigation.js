import {useNavigate, Outlet} from "react-router-dom";
import NavigationStyles from "../styles/NavigationStyles.css";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="navbar">
                <button id="home-button" onClick= {() => navigate("/home")}>Home</button> 
                <button onClick= {() => navigate("/orders")}>View Current Orders</button> 
                <button onClick= {() => navigate("/orders/new")}>Add New Order</button> 
            </section>
                <Outlet />
        </>
    );
};
 
export default Navigation;