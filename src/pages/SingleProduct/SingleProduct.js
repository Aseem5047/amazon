import React, { useState, useEffect } from 'react'
import './SingleProduct.css'
import { useParams, Link } from 'react-router-dom'
import { db } from '../../utils/Firebase';
import CurrentProduct from './CurrentProduct';

const SingleProduct = () => {

    let { id, type } = useParams();
    const [productData, setProductData] = useState([])

    useEffect(() => {
        db.collection(`${type}Data`).onSnapshot((snapshot) => {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map((doc) => {
                var data = doc.data()
                setProductData(product => [...product, data])

            });
        });
        // eslint-disable-next-line
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="single-product-container">

            {productData?.map((product) => (
                (product.id === id) &&
                <CurrentProduct SingleProduct={product} />

            ))}

            <div className="maylike-products-wrapper">

                <div className="marquee">
                    <div className="maylike-products-container track">
                        {productData.map((item, index) => (
                            <Link to={`/product/${item.type}/${item.id}`} onClick={scrollToTop} key={index}>
                                <div className="recommended-product">
                                    <img src={item.image} className="single-product-image" alt="" />
                                    <div className="single-product-title">
                                        <p id="SingleItemTitle" style={{ color: "black" }}>{item.title}</p>
                                    </div>
                                    <div id="rate" className="single-product-rating">{Array(item.rating).fill().map((_, index) => <p key={index}>⭐</p>)}</div>
                                    <p className="single-product-price">Price ... <strong>₹</strong>
                                        <strong>{item.price}</strong>
                                    </p>
                                </ div>
                            </Link>

                        ))}
                    </div>
                </div>
                <h2>Products You May Like</h2>
                <h3 style={{ textAlign: "center" }}>Scroll Up to view your product</h3>
            </div>

        </div>
    )
}

export default SingleProduct
