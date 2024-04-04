const OrderStatusEdit = ({ order, patchOrder }) => {

    const handleChange = (event) => {
        event.preventDefault();
        patchOrder(order.id, event.target.value);
    }

    return (
        <>
            <select
                id="order-status"
                name="order-status"
                defaultValue={order.orderStatus}
                onChange={handleChange}
            >
                <option disabled value="select-status">Select order status</option>
                <option value="PENDING">PENDING</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="OUT_FOR_DELIVERY">OUT FOR DELIVERY</option>
                <option value="DELIVERED">DELIVERED</option>
            </select>
        </>
    );
}
 
export default OrderStatusEdit;