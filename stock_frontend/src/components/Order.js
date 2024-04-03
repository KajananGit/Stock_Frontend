import OrderedItem from "./OrderedItem";
import OrderStyles from "../styles/OrderStyles.css";
import { useNavigate } from "react-router-dom";

const Order = ({ order, orderedItems, deleteOrder }) => {

    const mappedItems = orderedItems.map(item => {
        return <OrderedItem orderedItem={item} key={item.id}/>
    })

    const navigate = useNavigate();

    const handleDeleteButton = () => {
        deleteOrder(order.id);
    }

    const handleEditButton = () => {
        navigate(`/orders/${order.id}/edit`);
    }

    return (
        <>
        <main>
            <section className="order-display">
                <h3>Order: {order.supermarket.name.toUpperCase()}{order.id}</h3>
                <p>Order status: {order.orderStatus}</p>
                <p>Supermarket: {order.supermarket.name}, {order.supermarket.location}</p>
                <h4>Items ordered:</h4>
                <ul>{mappedItems}</ul>
                <button className="deleteButton" onClick={handleDeleteButton}>Delete</button>
                <button className="editButton" onClick={handleEditButton}>Edit</button>
            </section>
        </main>
        </>
    );
}
 
export default Order;