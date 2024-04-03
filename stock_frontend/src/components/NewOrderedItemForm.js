import { useState } from "react";

import item1 from "../assets/itemAssets/1.jpeg";
import item2 from "../assets/itemAssets/2.jpg";
import item3 from "../assets/itemAssets/3.jpeg";
import item4 from "../assets/itemAssets/4.jpeg";
import item5 from "../assets/itemAssets/5.jpeg";
import item6 from "../assets/itemAssets/6.jpeg";
import item7 from "../assets/itemAssets/7.jpeg";
import item8 from "../assets/itemAssets/8.jpg";

const NewOrderedItemForm = ( {items, postOrderedItem, newOrderId, orderPlaced, setOrderPlaced} ) => {

    // Using a map because it does not allow key duplicates, so we can update quantity dynamically
    const [orderItemsMap, setOrderItemsMap] = useState(new Map());

    const images = [item1, item2, item3, item4, item5, item6, item7, item8]

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
            <div key={item.id} className="ordered-item-form">
                <img src={images[item.id - 1]} alt={item.name}/>
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
        alert("Order recorded, please do not try to place it again");
        setOrderPlaced(true);
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
            <h3>Add items to order:</h3>
            <section id="ordered-item-form-container">
                {/* Conditional rendering only if newOrderId is not null */}
                {newOrderId && renderItems}
            </section>
            {newOrderId && <button id="place-order" onClick={handleSubmit}><span>Place Order</span></button>} 
            {orderPlaced && <p className="order-message">Order has been placed!</p>}           
        </>
     );
}
 
export default NewOrderedItemForm;