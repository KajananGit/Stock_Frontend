import OrderList from "../components/OrderList";
import { useEffect, useState } from "react";

const OrderContainer = () => {
   
    const [orders, setOrders] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);

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


    
    return (
        <>
            <h1>Orders</h1>
            <OrderList orders={orders} orderedItems={orderedItems} deleteOrder={deleteOrder}/>
            
        </>
      );
}
 
export default OrderContainer;




