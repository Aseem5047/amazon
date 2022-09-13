import React from 'react'
import './CheckoutProduct.css'
import { useDispatch } from 'react-redux'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { removeFromBasket } from '../../redux/actions'
import { useAlert } from "react-alert";

const CheckoutProduct = ({ id, title, image, rating, price, details }) => {

    const alert = useAlert();
    let dispatch = useDispatch();

    const removeItemFromBasket = () => {
        alert.success(`Item removed`)
        dispatch(removeFromBasket(id))
    }

    return (
        <div className="checkout-product">
            <img src={image} alt="" className="checkout-product-image" />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>
                <p className="checkout-product-price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
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
