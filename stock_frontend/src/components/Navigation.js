import {useNavigate, Outlet} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <h3>Navigation</h3>
            <button onClick= {() => navigate("/home")}>Home</button> 
            <button onClick= {() => navigate("/orders")}>View Current Orders</button> 
            <button onClick= {() => navigate("/orders/new")}>Create New Order</button> 
            <Outlet />
        </>
    );
};
 
export default Navigation;