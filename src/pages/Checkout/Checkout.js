
import React from 'react'
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

    const bannerImages = [Banner25, Banner26, Banner27, Banner15, Banner14, Banner17, Banner18, Banner19, Banner20, Banner22, Banner23, Banner24, Banner28, Banner29, Banner30, Banner29, Banner32, Banner33, Banner34]


    const { basket, user } = useSelector(state => state.data);

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
                    {basket && basket.map((item) => (
                        < CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            details={item.detail}
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
