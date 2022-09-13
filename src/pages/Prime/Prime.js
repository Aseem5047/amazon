import React from 'react'
import { useSelector } from 'react-redux'
import Deals from './Banners/Deals'
import Delivery from './Banners/Delivery'
import Gaming from './Banners/Gaming'
import GetStarted from './Banners/GetStarted'
import Reward from './Banners/Reward'
import Movies from './Entertainment/Movies'
import Reading from './Entertainment/Reading'
import Songs from './Entertainment/Songs'
import "./Prime.css"
import PrimeSlider from './PrimeSlider/PrimeSlider'

const Prime = () => {
    const { user } = useSelector(state => state.data);

    return (
        <>
            <div className="first_hiddenContainer" />
            <div className="firstContainer">
                <div className="container_content">
                    <div className="text_content">
                        <span style={{ fontSize: "2.2rem", fontWeight: "500", marginTop: "7.5vh" }}>Welcome {user ? user.displayName || user.email : "Guest"}</span>
                        <div className="subHeading">
                            <span>One simple membership, many benefits.</span>
                            <span>Check out what's included below.</span>
                            <span>The best of shopping and entertainment is all yours.</span>
                        </div>
                    </div>
                    <div className="button_content">
                        <span>JOIN PRIME AT ₹179 PER MONTH</span>
                        <p>Eligible with select credit cards or debit cards</p>
                        <span>JOIN PRIME AT ₹1,499 PER YEAR</span>
                        <p>With any credit/debit card, net banking or other electronic payment methods.</p>
                    </div>
                </div>
            </div>

            <PrimeSlider />
            <div style={{ maxWidth: "90vw", margin: "auto", marginTop: "5vh" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/prrrefresh/June/2022/PMP_Page_1500x300_px.jpg" alt="" style={{ width: "100%" }} />
            </div>

            <div className="primeEntertainment">
                <span
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: "400"
                    }}

                >Get the best of shopping and entertainment with Prime</span>
                <Movies />
                <Deals />
                <Songs />
                <Gaming />
                <Reward />
                <Reading />
                <Delivery />
                <GetStarted />
            </div>


        </>
    )
}

export default Prime