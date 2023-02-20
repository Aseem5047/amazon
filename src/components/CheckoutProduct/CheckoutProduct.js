import React from 'react'
import './CheckoutProduct.css'
import { useDispatch } from 'react-redux'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { removeFromBasket } from '../../redux/actions'
import { useAlert } from "react-alert";

// number formatter.
var formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
});

const CheckoutProduct = ({ id, title, image, rating, price, details, quantity }) => {

    const alert = useAlert();
    let dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(id))
        alert.success(`Item removed`)
    }

    return (
        <div className="checkout-product">
            <img src={image} alt="" className="checkout-product-image" />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>Quantity x {quantity}</p>
                <p className="checkout-product-price">
                    <strong>{formatter.format(price)}</strong>
                </p>
                <div className="productDetails">
                    <p>{details}</p>
                </div>
                <button onClick={removeItemFromBasket}>
                    <i><ShoppingCartOutlinedIcon /></i>
                    Remove from Cart
                </button>

            </div>
        </div>
    )
}

export default CheckoutProduct
