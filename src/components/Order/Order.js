import React from 'react';
import './Order.css';
import moment from "moment";
import CurrencyFormat from 'react-currency-format';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Order = ({ order }) => {
    return (
        <div className="order">

            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>

            {order.data.basket?.map((item) => (
                <OrderedProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    details={item.detail}
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order-total">Order Total ... {value}</h3>

                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />
            <p className="order-id">
                <small>{order.id}</small>
            </p>
        </div>
    )
}

export default Order
