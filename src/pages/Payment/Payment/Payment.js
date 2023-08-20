import React from 'react';
import './Payment.css';
import { useSelector } from 'react-redux'
import {
    Banner14, Banner15, Banner16, Banner17, Banner18, Banner19, Banner20, Banner21, Banner22, Banner23, Banner24, Banner25, Banner26, Banner27, Banner28, Banner29, Banner30, Banner31, Banner32, Banner33, Banner34
} from '../../../BannerImages/index'
import Slider from '../../../components/Slider/Slider'
import Checkout from './Checkout';

const Payment = () => {

    const { user } = useSelector(state => state.data);
    const bannerImages = [Banner25, Banner15, Banner14, Banner16, Banner17, Banner18, Banner19, Banner20, Banner21, Banner22, Banner23, Banner24, Banner26, Banner27, Banner28, Banner29, Banner30, Banner31, Banner32, Banner33, Banner34]

    return (
        <>
            <div className="slider">
                <Slider images={bannerImages} />
            </div>
            <h3 style={{ textAlign: "center", marginTop: "20vh" }}>Hello, {user?.email}</h3>
            <h2 style={{ textAlign: "center", margin: "auto", marginTop: "1vh", width: "90vw" }}>
                Edit or Pay on Checkout
            </h2>
            <div className="payment" style={{ width: "100%", marginTop: "5vh" }}>

                <h2 style={{ margin: "auto", textAlign: "center" }}>Review Proudcts</h2>
                <div className="payment-container">
                    <div className="payment-section" style={{ textAlign: "center" }}>
                        <div className="payment-details" >
                            <Checkout />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Payment
