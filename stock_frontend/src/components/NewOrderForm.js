const NewOrderForm = ({orderStatus, supermarketId}) => {
    
    

    
    return ( 
        <>
            <form>
                <label htmlFor="store-name">Store Branch:</label>
                <select
                    id="store-name"
                    type="text"
                    defaultValue="select-branch"
                >
                    <option disabled value="select-branch">Choose Branch</option>
                </select>
                <button>Submit</button>
            </form>
            
        </>
     );
}
 
export default NewOrderForm;