import { useState, useEffect } from "react"
import NewOrderForm from "../components/NewOrderForm";
import NewOrderedItemForm from "../components/NewOrderedItemForm";
const NewOrderContainer = () => {

    // For NewOrderForm
    const [supermarkets, setSupermarkets] = useState([]);
    const [supermarketId , setSupermarketId] = useState(null);
    
    // For NewOrderedItemForm
    const [items, setItems] = useState([]);
    const [newOrderId, setNewOrderId] = useState([]);
    const [stocks, setStocks] = useState([]);

    // Fetching Data
    const loadStocksData = async () => {
        const response = await fetch("http://localhost:8080/stocks");
        const jsonData = await response.json();
        setStocks(jsonData);
    
    }

    const loadSupermarketsData = () => {
        return [
            {"id": 1, "name": "Tesco"},
            {"id": 2, "name": "Morrisons"},
            {"id": 3, "name": "Sainsburys"},
            {"id": 4, "name": "Lidl"},
            {"id": 5, "name": "Waitrose"}          
        ]
    }

    const loadItemsData = async () => {
        const response = await fetch("http://localhost:8080/items");
        const jsonData = await response.json();
        setItems(jsonData);

    }

    // Post Requests
    const postNewOrder = async (supermarketId) => {
        const response = await fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "supermarketId" : supermarketId
                })
        })

        // Get Id of the newOrder to pass into the OrderItems for the POST requests
        const newOrder = await response.json();
        setNewOrderId(newOrder.id);
    }
    
    useEffect(() => {
        loadStocksData();
        setSupermarkets(loadSupermarketsData());
        loadItemsData();
    }, []);

    return ( 
        <>
        <NewOrderForm supermarkets={supermarkets} supermarketId = {supermarketId} setSupermarketId={setSupermarketId} postNewOrder={postNewOrder} />
        <NewOrderedItemForm items = {items} newOrderId={newOrderId} stocks={stocks}/>
        </>
    );
}
 
export default NewOrderContainer;