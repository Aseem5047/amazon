
import React, { useMemo, useState } from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import SubTotal from '../../components/SubTotal/SubTotal'

import {
    Banner14,
    Banner15,
    Banner17,
    Banner18,
    Banner19,
    Banner20,
    Banner22,
    Banner23,
    Banner24,
    Banner25,
    Banner26,
    Banner27,
    Banner28,
    Banner29,
    Banner30,
    Banner32,
    Banner33,
    Banner34
} from '../../BannerImages/index'
import Slider from '../../components/Slider/Slider'

const Checkout = () => {

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    const bannerImages = [Banner25, Banner26, Banner27, Banner15, Banner14, Banner17, Banner18, Banner19, Banner20, Banner22, Banner23, Banner24, Banner28, Banner29, Banner30, Banner29, Banner32, Banner33, Banner34]


    const { basket, user } = useSelector(state => state.data);


    useMemo(() => {
        const groupedItems = basket.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            // console.log(results);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems)
    }, [basket])

    return (
        <div className="checkout">
            <Slider images={bannerImages} />
            <div className="checkout-left">

                <div>
                    <h3 style={{ textAlign: "center", marginTop: "15vh" }}>Hello, {user ? user.email : "Guest"}</h3>
                    <h2 className="checkout-title">
                        {basket.length === 0 ? "No Product added - Empty Cart" : "Your Cart"}
                    </h2>
                    {console.log(basket)}
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        < CheckoutProduct
                            key={key}
                            id={items[0].id}
                            title={items[0].title}
                            image={items[0].image}
                            price={items[0].price}
                            rating={items[0].rating}
                            details={items[0].detail}
                            quantity={items.length}
                        />

                    ))}
                </div>
            </div>
            <div className="checkout-right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
