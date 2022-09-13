import React from 'react'
import './Banners.css'
import '../Prime.css'

const GetStarted = () => {
    return (
        <>

            <div className="GetStartedHiddenContainer" />
            <div className="GetStartedContainer">
                <div className="Banner_Content GetStarted">
                    <div className="text_content">
                        <span style={{ fontSize: "2rem" }}>Choose your plan to get started</span>
                        <div className="button_content" >
                            <span>JOIN PRIME AT ₹179 PER MONTH</span>
                            <p>Eligible with select credit cards or debit cards</p>
                            <span>JOIN PRIME AT ₹1,499 PER YEAR</span>
                            <p>With any credit/debit card, net banking or other electronic payment methods.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default GetStarted