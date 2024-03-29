import React, { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './Entertainment.css'


const images = [

    "https://m.media-amazon.com/images/I/71tYun+Y8IL..jpg",
    "https://m.media-amazon.com/images/I/61lx3kuyqEL..jpg",
    "https://m.media-amazon.com/images/I/51qwetX-24L._AA256_.jpg",
    "https://m.media-amazon.com/images/I/81KCGMeK+SL..jpg"

]

const Songs = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = images.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)

        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <>

            <ul className="Entertainment-list">
                {images.map((image, id) => {

                    let position = "nextEntertainmentItem";
                    if (id === index) {
                        position = "activeEntertainmentItem"
                    }
                    if (id === index - 1 || (index === 0 && id === images.length - 1)) {
                        position = "lastEntertainmentItem"
                    }

                    return (
                        <li className={position}
                            key={id}>
                            <img src={image} alt="" />

                            <div className="EntertainmentLeft" onClick={() => setIndex(index - 1)}>
                                <p>
                                    <ArrowBackIosIcon />
                                </p>
                            </div>
                            <div className="EntertainmentRight" onClick={() => setIndex(index + 1)}>
                                <p>
                                    <ArrowForwardIosIcon />
                                </p>
                            </div>
                        </li>
                    )

                })}
                <div className="Entertainment_content">
                    <span className="heading">
                        75 millions songs, ad-free                    </span>
                    <span className="details">
                        Prime Music gives you access to ad-free music in English, Hindi, Tamil, Punjabi, Telugu, Bengali and more languages. Enjoy free offline downloads and carry your music everywhere.
                    </span>
                    <span className="type">
                        Explore Prime Music
                    </span>
                </div>


            </ul>


        </>
    )
}

export default Songs