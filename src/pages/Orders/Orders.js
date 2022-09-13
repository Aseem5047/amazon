import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from '../../utils/Firebase'
import Order from '../../components/Order/Order'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = () => {

    const { user } = useSelector(state => state.data);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot) => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            })
        }
    }, [user]);

    console.log(orders);

    return (
        <>
            <img className="checkout-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Jupiter/Phase4/MobilesPage/P53006629_Jup21_Phase3_WLA_Mobiles-page_PC_1500_green_2.jpg" alt="Ad" style={{ width: "100vw", marginTop: "4vh" }} />

            <div className="orders">
                <h1>Your Orders</h1>
                {/* {(!user || !orders) && <h2>Nothing to see here Continue Shopping</h2>} */}
                <div className="orders-order">
                    {orders && orders.map((order, index) => <Order order={order} key={index} />)}
                </div>
                <Link to='/' id="button" style={{ marginLeft: "1vh" }}>Go To Home</Link>
            </div>
        </>
    )
}

export default Orders
