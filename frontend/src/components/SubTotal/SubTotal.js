import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../utils/BasketTotal'
import { useAlert } from "react-alert";


const SubTotal = () => {

    const alert = useAlert();
    const { basket, user } = useSelector(state => state.data);
    let history = useHistory();
    const handleCheckout = () => {
        if (user) {
            history.push("/payment");
            alert.success("Redirected to Payment Page")

        } else {
            history.push("/login");
            alert.error("Please Login to Continue")
        }
    };

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {/* {console.log(value)} */}
                        <p>
                            SubTotal ({basket.length} items) : <strong>{!basket.length > 0 ? "₹ 0" : (value)}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />

            <button disabled={!basket.length > 0} onClick={handleCheckout}
                style={{ background: `${!basket.length > 0 && "#80808021"}` }}
            >{basket.length > 0 ? "Proceed To Checkout" : "Shopping Cart Empty"}</button>
        </div >
    )
}

export default SubTotal
