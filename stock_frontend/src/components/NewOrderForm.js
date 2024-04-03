const NewOrderForm = ({supermarkets, postNewOrder, supermarketId, setSupermarketId}) => {
    

    const supermarketOptions = supermarkets.map(supermarket => {
        return <option key = {supermarket.id} value={supermarket.id}> {supermarket.name}</option>
    })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!supermarketId) {
            return alert("Please select a supermarket.")
        }
        postNewOrder(supermarketId); 
    }

    return ( 
        <>
            <form id="new-order-form">
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
                <button onClick={handleSubmit}><span>Start New Order</span></button>
            </form>
            
        </>
     );
}
 
export default NewOrderForm;