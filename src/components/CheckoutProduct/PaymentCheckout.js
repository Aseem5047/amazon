import React from 'react'
import './CheckoutProduct.css'
import { useDispatch } from 'react-redux'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { removeFromBasket } from '../../redux/actions'
import { useAlert } from "react-alert";

const PaymentCheckout = ({ id, title, image, rating, price, quantity }) => {

    const alert = useAlert();
    let dispatch = useDispatch();

    const removeItemFromBasket = () => {
        alert.success(`Item removed`)
        dispatch(removeFromBasket(id))
    }

    return (
        <div className="Payment-checkout-product" style={{ marginBottom: "5vh", display: "flex", alignItems: "center" }}>
            <img src={image} alt="" className="checkout-product-image" />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>Quantity x {quantity}</p>
                <p className="checkout-product-price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating" style={{ justifyContent: 'center' }}>
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>

                <button onClick={removeItemFromBasket}>
                    <i><ShoppingCartOutlinedIcon /></i>
                    Remove from Cart
                </button>

            </div>
        </div>
    )
}

export default PaymentCheckout
