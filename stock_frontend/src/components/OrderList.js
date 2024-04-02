import Order from './Order';

const OrderList = ({ orders, orderedItems }) => {

    const mappedOrders = orders.map(order => {
        return <Order key={order.id} order={order} 
        orderedItems={orderedItems.filter(orderedItem => orderedItem.order.id === order.id)}/>
    });

    return ( 
        <div>
            <h2>Hello from the OrderList component</h2>
            {mappedOrders}
        </div>
    );
};
 
export default OrderList;
