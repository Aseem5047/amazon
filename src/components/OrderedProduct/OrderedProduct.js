import React from 'react'
import '../CheckoutProduct/CheckoutProduct.css'

const OrderedProduct = ({ id, title, image, rating, price, details }) => {

    return (
        <div className="checkout-product">
            <img src={image} alt="" className="checkout-product-image" />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>
                <div className="productDetails">
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderedProduct
