const OrderedItem = ({ orderedItem }) => {
    return ( 
        <>
            <li>
                <p>Item: {orderedItem.stock.item.name}</p>
                <p>Quantity: {orderedItem.orderQuantity}</p>
            </li>
        </>
     );
}
 
export default OrderedItem;