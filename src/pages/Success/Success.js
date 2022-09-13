import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { db } from '../../utils/Firebase';
import { runFireworks } from './Fireworks';
import { useAlert } from "react-alert";

import "./Success.css"
import { useDispatch, useSelector } from 'react-redux';
import { setBasketEmpty } from '../../redux/actions';
import { getBasketTotal } from '../../utils/BasketTotal';
import axios from 'axios';

const Success = () => {

  const [clientSecret, setClientSecret] = useState(true);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { basket, user } = useSelector(state => state.data);


  useEffect(() => {
    localStorage.clear();
    runFireworks();
  }, []);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/paymentIntent/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket])

  const handleClick = () => {
    try {

      db.collection("users")
        .doc(user && user.uid)
        .collection("orders")
        .doc(clientSecret.id)
        .set({
          basket: basket,
          amount: clientSecret.amount,
          created: clientSecret.created,
        })
      dispatch(setBasketEmpty())
      alert.success("Payment successful")
      // history.replace("/success");

    } catch (error) {
      console.log(error)
      dispatch(setBasketEmpty())
      alert.error("Payment failed")
      // history.replace("/checkout");
    }
  }

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:aseemgupta2002@gmail.com">
            order@example.com
          </a>
        </p>
        <Link to="/orders">
          <button type="button" onClick={handleClick} width="300px" className="successbtn">
            Review Order
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success