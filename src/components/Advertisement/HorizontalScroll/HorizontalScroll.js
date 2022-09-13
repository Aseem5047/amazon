import React from 'react'
import "./HorizontalScroll.css"
import { Link } from 'react-router-dom'

const HorizontalScroll = ({ image, header, link }) => {
    return (
        <>
            <div className="scroller-item">
                <Link to={link}>
                    <img src={image} alt="png" />
                    <p className="title" style={{marginBottom: '2vh'}}>{header}</p>
                </Link>
            </div>

        </>
    )
}

export default HorizontalScroll