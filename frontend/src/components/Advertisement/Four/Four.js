import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Four.css"

function Four({ image, header, link }) {
    return (
       
            <div className="AdvertisementOne__body">
                <Link to={link}>
                    <img src={image} className="ad_fourImage" alt="" />
                    <p className="HeaderTitle">{header}</p>
                </Link>
            </div>
   
    );
}

export default Four;