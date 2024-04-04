import Order from './Order';

const OrderList = ({ orders, orderedItems, deleteOrder, patchOrder }) => {

    const mappedOrders = orders.map(order => {
        return <Order 
                    key={order.id} 
                    order={order} 
                    orderedItems={orderedItems.filter(orderedItem => orderedItem.order.id === order.id)}
                    deleteOrder={deleteOrder}
                    patchOrder={patchOrder}
                />
    });

    return ( 
        <div>
            {mappedOrders}
        </div>
    );
};
 
export default OrderList;
