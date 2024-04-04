import OrderedItem from "./OrderedItem";
import OrderStyles from "../styles/OrderStyles.css";
import { useNavigate } from "react-router-dom";
import OrderStatusEdit from "./OrderStatusEdit";
import { useState } from "react";

const Order = ({ order, orderedItems, deleteOrder, patchOrder, expandStatus, toggleExpandStatus, toggleButtonLabel }) => {

    const mappedItems = orderedItems.map(item => {
        return <OrderedItem orderedItem={item} key={item.id}/>
    })

    const navigate = useNavigate();

    const handleDeleteButton = () => {
        deleteOrder(order.id);
    }

    const handleExpandButton = () => {
        toggleExpandStatus();
    }

    return (
        <>
        <main>
            <section className="order-display">
                <h3>Order: {order.supermarket.name.toUpperCase()}{order.id}</h3>
                <p>Order status: <OrderStatusEdit order={order} patchOrder={patchOrder}/></p>
                <p>Supermarket: {order.supermarket.name}, {order.supermarket.location}</p>
                {expandStatus && <> <h4>Items ordered:</h4>
                <ul>{mappedItems}</ul>
                <button className="deleteButton" onClick={handleDeleteButton}>Delete</button>
                </>}
                <button className="expandButton" onClick={handleExpandButton}>{toggleButtonLabel()}</button>
                {handleExpandButton}

            </section>
        </main>
        </>
    );
}
 
export default Order;