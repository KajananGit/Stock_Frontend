import { eventWrapper } from "@testing-library/user-event/dist/utils";
import OrderedItem from "./OrderedItem";

const NewOrderedItemForm = ( {items, newOrderId, stocks} ) => {
   
    const orderedItems = new Map();

    const renderItems = items.map(item =>{

        return (
            <>
                <p>{item.name}</p>
                <form>
                    <input type="number" 
                           placeholder="Enter Quantity.." 
                           value={orderedItems}
                           onChange={(event) => {orderedItems.set(item.id, event.target.value)}}  />
                </form>
            </>
        )
    }
    )
    
    const handleChange = (item,event) => {
        orderedItems.set(item.id, event.target.value) 
        
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    
    return ( 
        <>
        <h3>NewOrderedItemForm</h3>
        {renderItems}
        <button onClick={handleSubmit}>Order NOW!!!</button>
        </>


     );
}
 
export default NewOrderedItemForm;