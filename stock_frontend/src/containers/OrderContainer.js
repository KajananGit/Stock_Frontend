import OrderList from "../components/OrderList";
import Navigation from "../components/Navigation";
import OrderSearch from "../components/OrderSearch";
import NewOrderedItemForm from "../components/NewOrderedItemForm";
import NewOrderForm from "../components/NewOrderForm";
import { useEffect, useState } from "react";

const OrderContainer = () => {
   
    const [orders, setOrders] = useState([]);
    const [supermarkets, setSupermarkets] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);

    const fetchOrders = async () => {
        const response = await fetch("http://localhost:8080/orders");
        const data = await response.json();
        setOrders(data);
    }

    const fetchSupermarkets = async () => {
        const response = await fetch("http://localhost:8080/supermarkets");
        const data = await response.json();
        setSupermarkets(data);
    }

    const fetchOrderedItems = async () => {
        const response = await fetch("http://localhost:8080/ordered-items");
        const data = await response.json();
        setOrderedItems(data);
    }

    useEffect(()=> {
        fetchOrderedItems()
        fetchOrders()
        fetchSupermarkets()
    },[]);


    
    return (
        <>
            <h1>Hello from the OrderContainer</h1>
            <OrderList orders={orders} orderedItems={orderedItems}/>
            
        </>
      );
}
 
export default OrderContainer;




