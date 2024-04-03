import OrderedItem from "./OrderedItem";
import OrderStyles from "../styles/OrderStyles.css";

const Order = ({ order, orderedItems, deleteOrder }) => {

    const mappedItems = orderedItems.map(item => {
        return <OrderedItem orderedItem={item} key={item.id}/>
    })

    const handleDeleteButton = () => {
        deleteOrder(order.id);
    }

    return (
        <>
        <main>
            <section className="order-display">
                <h3>Order ID: {order.id}</h3>
                <p>Order status: {order.orderStatus}</p>
                <p>Supermarket: {order.supermarket.name}, {order.supermarket.location}</p>
                <h4>Items ordered:</h4>
                <ul>{mappedItems}</ul>
                <button className="deleteButton" onClick={handleDeleteButton}>Delete</button>
            </section>
        </main>
        </>
    );
}
 
export default Order;