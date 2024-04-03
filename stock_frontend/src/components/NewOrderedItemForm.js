import { useState } from "react";

const NewOrderedItemForm = ( {items, postOrderedItem, newOrderId} ) => {

    // Using a map because it does not allow key duplicates, so we can update quantity dynamically
    const [orderItemsMap, setOrderItemsMap] = useState(new Map());

    const renderItems = items.map(item =>{

        // get the maximum quantity of each item
        const maxQuantity = () => {
        let sumQuantity = 0;
        item.stocks.forEach(stock => {
            sumQuantity += stock.quantity
        });
        return sumQuantity;
        }

        return (
            <div key={item.id}>
                <p>{item.name}</p>
                <form>
                    <input type="number" 
                           placeholder="Enter Quantity.." 
                           min = {0}
                           max = {maxQuantity()}
                           name = {item.id}
                           onChange={(event)=> handleChange(event)}  />
                </form>
            </div>
        )
    }
    )
    
    const handleChange = (event) => {
        // Whenever a quantity has been entered for an item, update the {itemId : quantity} pair
        setOrderItemsMap(mapState => new Map(mapState.set(event.target.name, event.target.value)))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        postAllOrderedItems();
    }

    // Iterate through the orderItemsMap
    const postAllOrderedItems = () => orderItemsMap.forEach ((value, key) => {
    
        // Get stocks array for item
        let currentItem = items.find(({id}) => id == key);
        let currentStocks = currentItem.stocks;

        // Post Request from stocks until order quantity is fulfilled
        let leftQuantity = value;
        for (let idx = 0; idx < currentStocks.length; idx++){
            // Because backend doesn't remove stocks with 0 quantity left
            if (currentStocks[idx].quantity === 0){continue}

            // If ordered amount is more than the current stock quantity, post request with the smaller value
            let passedQuantity = Math.min(leftQuantity,currentStocks[idx].quantity);
            
            if (leftQuantity <= 0){
                break
            }
            postOrderedItem(currentStocks[idx].id, passedQuantity);
            leftQuantity -= currentStocks[idx].quantity;
            // Break when the order quantity has been fulfilled
        }
        // Reset state
        setOrderItemsMap(new Map());
        
    });

    
    return ( 
        <>
        <h3>New Ordered Item Form</h3>
        {/* Conditional rendering only if newOrderId is not null */}
        {newOrderId&&renderItems}
        {newOrderId&&<button onClick={handleSubmit}>Order NOW!!!</button>}
        </>
     );
}
 
export default NewOrderedItemForm;