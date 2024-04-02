import OrdersList from "../components/OrdersList";
import Navigation from "../components/Navigation";
import OrderSearch from "../components/OrderSearch";
import NewOrderedItemForm from "../components/NewOrderedItemForm";
import NewOrderForm from "../components/NewOrderForm";
import { useEffect, useState } from "react";

const OrdersContainer = () => {
   
    const [stockId, setStockId] = useState(null);

    const loadStocksData = async () => {
        const response = await fetch("http://localhost:8080/stocks");
        const jsonData = await response.json();
        console.log(jsonData);
    }

    useEffect(() => {
        loadStocksData();
    }, []);


    
    return (
        <>
            <Navigation />
            <h1>Hello from the OrdersContainer</h1>
            <OrdersList />
            <OrderSearch />
            <NewOrderedItemForm />
            <NewOrderForm />
        </>
      );
}
 
export default OrdersContainer;