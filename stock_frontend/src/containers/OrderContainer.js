import OrderList from "../components/OrderList";
import { useEffect, useState } from "react";
import OrderContainerStyles from "../styles/OrderContainerStyles.css"

const OrderContainer = () => {
   
    const [orders, setOrders] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    

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

    const patchOrder = async (orderId, orderStatus) => {
        await fetch(`http://localhost:8080/orders/${orderId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "orderStatus": orderStatus
            })
        })
        await fetchOrders();
    }

    const filteredOrders = orders.filter((order) => {
        if(searchValue){
            return order.supermarket.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
        } 
        if (sortValue){
            return order.orderStatus.toLowerCase().includes(sortValue.toLocaleLowerCase());
        }
        return order;
    })

    

    return (
        <>
            <h1>Orders</h1>
            <select
                    className="sort"
                    type="text"
                    defaultValue="select-order-status"
                    onChange={(event) => setSortValue(event.target.value)}>
                        <option disabled value="select-order-status">Sort by Status</option>
                        <option value="">All</option>
                        <option value="PENDING">Pending</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
                        <option value="DELIVERED">Delivered</option>
            </select>
            <form className="search-bar">
                <input type="text"  
                       value={searchValue} onChange={event => setSearchValue(event.target.value)} 
                       placeholder="Search orders by supermarket..."/>
            </form>
           
            <OrderList orders={filteredOrders} orderedItems={orderedItems} deleteOrder={deleteOrder}
                        patchOrder={patchOrder} />
        </>
      );
}
 
export default OrderContainer;




