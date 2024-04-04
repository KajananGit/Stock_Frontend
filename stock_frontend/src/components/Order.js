import OrderedItem from "./OrderedItem";
import OrderStyles from "../styles/OrderStyles.css";
import { useNavigate } from "react-router-dom";
import OrderStatusEdit from "./OrderStatusEdit";

const Order = ({ order, orderedItems, deleteOrder, patchOrder }) => {
    
    const mappedItems = orderedItems.map(item => {
        return <OrderedItem orderedItem={item} key={item.id}/>
    })

    const navigate = useNavigate();

    const handleDeleteButton = () => {
        deleteOrder(order.id);
    }

    const handleEditButton = () => {
        
    }

    return (
        <>
        <main>
            <section className="order-display">
                <h3>Order: {order.supermarket.name.toUpperCase()}{order.id}</h3>
                <p>Order status: <OrderStatusEdit order={order} patchOrder={patchOrder}/></p>
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