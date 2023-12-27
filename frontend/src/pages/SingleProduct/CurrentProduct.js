import React from 'react'
import './SingleProduct.css'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useAlert } from "react-alert";
import Gallery from '../../components/Gallery/Gallery';

const CurrentProduct = ({ SingleProduct }) => {

    const alert = useAlert();
    let dispatch = useDispatch();

    const AddItemToBasket = () => {
        alert.success("Item Added to Cart")
        const item = {
            key: SingleProduct.id,
            id: SingleProduct.id,
            rating: SingleProduct.rating,
            title: SingleProduct.title,
            price: SingleProduct.price,
            image: SingleProduct.image,
            specification: SingleProduct.specification,
            detail: SingleProduct.detail,
        };

        dispatch(addToBasket(item));
    }

    var imageArr = SingleProduct.image && SingleProduct.image.map((image) => (
        image
    ))

    console.log(SingleProduct);

    return (
        <div className="single-product-container">

            <div>
                <div className="single-product" style={{ marginTop: "5vh" }}>

                    {imageArr.length === 1 ? <img src={imageArr[0]} className="single-product-image" alt="" /> :
                        <Gallery image={imageArr} title={SingleProduct.title} />
                    }



                    <div className="single-product-info">
                        <div className="single-product-title" style={{ textAlign: 'left', margin: 'unset' }}>{SingleProduct.title}</div>
                        <p className="single-product-price">Price ... <strong>₹</strong>
                            <strong>{SingleProduct.price}</strong>
                        </p>
                        <div className="single-product-rating">{Array(SingleProduct.rating).fill().map((_, index) => <p key={index}>⭐</p>)}</div>
                        <div className="single-product-specification">
                            <h4>Specification</h4>
                            {SingleProduct.specification && SingleProduct.specification.map((item, index) => (
                                <li key={index}>{item}</li>
                                // console.log("item")
                            ))}
                        </div>

                        <div className="single-product-description">
                            <h4>Product Description</h4>
                            <p>{SingleProduct.detail}</p>
                        </div>

                        <button onClick={AddItemToBasket}>
                            <i><ShoppingCartOutlinedIcon /></i>
                            Add To Basket
                        </button>
                        <div style={{ display: "flex", justifyContent: "flex-start" }}>
                            <h2 style={{ marginTop: "2vh", fontSize: "1.1rem" }}>Scroll Down to View Suggested Products </h2>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CurrentProduct
