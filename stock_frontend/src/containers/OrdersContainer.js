import OrdersList from "../components/OrdersList";
import Navigation from "../components/Navigation";
import OrderSearch from "../components/OrderSearch";
import NewOrderedItemForm from "../components/NewOrderedItemForm";
import NewOrderForm from "../components/NewOrderForm";

const OrdersContainer = () => {
   
    
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