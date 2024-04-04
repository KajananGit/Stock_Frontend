import Order from './Order';

const OrderList = ({ orders, orderedItems, deleteOrder, patchOrder, expandStatus, toggleExpandStatus, toggleButtonLabel}) => {

    const mappedOrders = orders.map(order => {
        return <Order 
                    key={order.id} 
                    order={order} 
                    orderedItems={orderedItems.filter(orderedItem => orderedItem.order.id === order.id)}
                    deleteOrder={deleteOrder}
                    patchOrder={patchOrder}
                    expandStatus={expandStatus}
                    toggleExpandStatus={toggleExpandStatus}
                    toggleButtonLabel={toggleButtonLabel}
                />
    });

    return ( 
        <div>
            {mappedOrders}
        </div>
    );
};
 
export default OrderList;
