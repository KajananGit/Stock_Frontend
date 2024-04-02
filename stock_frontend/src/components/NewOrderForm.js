import { useState } from "react"

const NewOrderForm = ({supermarkets, postNewOrder, supermarketId, setSupermarketId}) => {
    

    const supermarketOptions = supermarkets.map(supermarket => {
        return <option key = {supermarket.id} value={supermarket.id}> {supermarket.name}</option>
    })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        postNewOrder(supermarketId);
        
    }

    return ( 
        <>
            <form>
                <label htmlFor="supermarket-name">Select Supermarket:</label>
                <select
                    id="supermarket-name"
                    type="text"
                    name="name"
                    defaultValue="select-supermarket"
                    onChange={(event) => setSupermarketId(event.target.value)}
                >
                    <option disabled value="select-supermarket">Choose Supermarket</option>
                    {supermarketOptions}
                </select>
                <button onClick={handleSubmit}>Start New Order</button>
            </form>
            
        </>
     );
}
 
export default NewOrderForm;