import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/actions'
import { useAlert } from "react-alert";

const Product = ({ id, title, image, price, rating, specification, detail, type }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const onAddItemToBasket = () => {
        alert.success("Item Added to Cart")
        const item = {
            id, title, image, price, rating, specification, detail
        };
        dispatch(addToBasket(item));
    };
    // number formatter.
    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return (

        <div className="product">
            <Link to={`/product/${type}/${id}`}>

                <p className="title">{title}</p>

                <p className="price">
                    <strong>Price </strong>
                    <strong>{formatter.format(price)}</strong>
                </p>
                <div className="rating">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>

                <img src={image} alt="" id="productImg" />
            </Link>

            <button className="btn" onClick={onAddItemToBasket}>
                <i>
                    <ShoppingCartOutlinedIcon />
                </i>
                Add to Cart
            </button>
        </div>

    )
}

export default Product
