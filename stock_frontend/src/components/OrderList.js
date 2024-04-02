import React from 'react';
import Order from './Order';

const OrderList = ({ orders }) => {
    return ( 
        <div>
            <h2>Hello from the OrderList component</h2>
            {orders.map(order => (
                <Order key={order.id} />
            ))}
        </div>
    );
};
 
export default OrderList;
