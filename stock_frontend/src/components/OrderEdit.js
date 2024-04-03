import { useNavigate } from "react-router-dom"
import { useState } from "react";

const OrderEdit = () => {

    const [stateOrder, setStateOrder] = useState({});
    const navigate = useNavigate();

    const handleChange = () => {

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate("/orders")
    }

    return (
        <>
            Edit order here
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="order-status">Order Status:</label>
                <select
                    id="order-status"
                    name="order-status"
                    defaultValue={stateOrder}
                    onChange={handleChange}
                >
                    <option disabled value="select-status">Select order status</option>
                    <option value="PENDING">PENDING</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="OUT_FOR_DELIVERY">OUT FOR DELIVERY</option>
                    <option value="DELIVERED">DELIVERED</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}
 
export default OrderEdit;