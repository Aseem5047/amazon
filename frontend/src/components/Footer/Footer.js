import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="Row">
                    <div className="Column">
                        <h1>Get To Know Us</h1>
                        <a href="/">About Us</a>
                        <a href="/">Careers</a>
                        <a href="/">Press Releases</a>
                        <a href="/">Amazon Cares</a>
                        <a href="/">Gift a Smile</a>
                        <a href="/">Amazon Science</a>
                    </div>
                    <div className="Column">
                        <h1>Connect with Us</h1>
                        <a href="/">Facebook</a>
                        <a href="/">Twitter</a>
                        <a href="/">Instagram</a>
                    </div>
                    <div className="Column">
                        <h1>Make Money With Us</h1>
                        <a href="/">Sell on Amazon</a>
                        <a href="/">Sell under Amazon Accelerator</a>
                        <a href="/">Amazon Global Selling</a>
                        <a href="/">Become an Affilate</a>
                        <a href="/">Fulfilment by Amazon</a>
                        <a href="/">Advertise your Product</a>
                        <a href="/">Amazon Pay on Merchants</a>
                    </div>
                    <div className="Column">
                        <h1>Let Us Help You</h1>
                        <a href="/">Covid-19 and Amazon</a>
                        <a href="/">Your Account</a>
                        <a href="/">Return Centre</a>
                        <a href="/">100% Purchase Protection</a>
                        <a href="/">Amazon App Download</a>
                        <a href="/">Amazon Assistant Download</a>
                        <a href="/">Help</a>
                    </div>
                </div>
            </div>
            <div className="mainFooter">

                <img src="favicon.ico" alt="" style={{ width: "50px", height: "10%", marginTop: "-10px", marginBottom: "-50px", marginLeft: "auto", margin: "auto" }} />
                <p className="font-bold text-white rounded dark:text-white my-2 mx-2">
                    © 2021 Amazon Inc. All Rights Reserved.
                </p>
            </div>
        </>

    )
}
