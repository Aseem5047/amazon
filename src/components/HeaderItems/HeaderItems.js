import React from 'react'
// import Menu from '../Header/Menu';
import { Link } from 'react-router-dom'
import "./HeaderItems.css"

const HeaderItems = () => {
    return (
        <div>
            <div className="item-container">
                {<p ><span style={{ color: "#2b2727" }}>------------</span></p>}
                {<p ><span>{<Link to="/trending">Best Sellers</Link>}</span></p>}
                {<p ><span>{<Link to="/mobiles">Mobiles</Link>}</span></p>}
                {<p ><span>{<Link to="/electronics">Electronics</Link>}</span></p>}
                {<p id="fashion"><span>{<Link to="/fashion">Fashion</Link>}</span></p>}
                {<p id="arrival"><span>{<Link to="/newReleases">New Arrivals</Link>}</span></p>}
                {<p id="alexa"><span>{<Link to="/echo&alexa">Digital Devices</Link>}</span></p>}
                {<p id="computers"><span>{<Link to="/computers">Computers</Link>}</span></p>}
                {<p id="prime"><span>{<Link to="/sports&fitness">Sports & Fitness</Link>}</span></p>}
                {<p id="kitchen"><span>{<Link to="/home&kitchen">Home & Kitchen</Link>}</span></p>}
                {<p ><span>{<Link id="prime" to="/prime">Movie & Music</Link>}</span></p>}
                {<a className="pay" href="/pay" style={{ margin: "5px", fontfamily: "Arial, sans-serif" }} rel="noreferrer">Amazon Pay</a>}

            </div>
        </div>
    )
}

export default HeaderItems
