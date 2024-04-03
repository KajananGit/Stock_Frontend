import {useNavigate, Outlet} from "react-router-dom";
import NavigationStyles from "../styles/NavigationStyles.css";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="navbar">
                <button onClick= {() => navigate("/home")}>Home</button> 
                <button onClick= {() => navigate("/orders")}>View Current Orders</button> 
                <button onClick= {() => navigate("/orders/new")}>Create New Order</button> 
                <Outlet />
            </section>
        </>
    );
};
 
export default Navigation;