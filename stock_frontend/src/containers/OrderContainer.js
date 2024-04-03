import OrderList from "../components/OrderList";
import { useEffect, useState } from "react";
import OrderContainerStyles from "../styles/OrderContainerStyles.css"

const OrderContainer = () => {
   
    const [orders, setOrders] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const fetchOrders = async () => {
        const response = await fetch("http://localhost:8080/orders");
        const data = await response.json();
        setOrders(data);
    }

    const fetchOrderedItems = async () => {
        const response = await fetch("http://localhost:8080/ordered-items");
        const data = await response.json();
        setOrderedItems(data);
    }

    useEffect(()=> {
        fetchOrderedItems()
        fetchOrders()
    },[]);

    const deleteOrder = async (orderId) => {
        // const orderedItemsToRemove = orderedItems.filter(orderedItem => orderedItem.order.id === orderId);
        // orderedItemsToRemove.forAll(orderedItem => orderedItem.orderQuantity = 0);
        await fetch(`http://localhost:8080/orders/${orderId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        setOrders(orders.filter(order => order.id !== orderId));
    }

    const filteredOrders = orders.filter((order) => {
        if(searchValue){
            return order.id == searchValue
        }
        return order;
    })


    
    return (
        <>
            <h1>Orders</h1>
            <form className="search-bar">
                <input type="text"  
                       value={searchValue} onChange={event => setSearchValue(event.target.value)} 
                       placeholder="Search orders by ID..."/>
            </form>
            <OrderList orders={filteredOrders} orderedItems={orderedItems} deleteOrder={deleteOrder}/>
        </>
      );
}
 
export default OrderContainer;




