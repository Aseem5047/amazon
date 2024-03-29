import React, { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './Entertainment.css'
const images = [
    "https://m.media-amazon.com/images/G/31/prime/CEO/2018/Sep/SlashPrime/v2/Padmaavat.jpg",
    "https://m.media-amazon.com/images/G/31/prime/CEO/2018/Sep/SlashPrime/v2/JUMANJI.jpg",
    "https://m.media-amazon.com/images/G/31/prime/CEO/2018/Sep/SlashPrime/v2/Race-3.jpg",
    "https://m.media-amazon.com/images/G/31/prime/CEO/2018/Sep/SlashPrime/v2/RX100.jpg"
]

const Movies = () => {

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
                        Latest & exclusive Bollywood and Hollywood blockbusters
                    </span>
                    <span className="details">
                        Prime Video gives you access to the latest Entertainment and TV shows in English and multiple Indian languages. Watch anytime, anywhere and at no extra cost.
                    </span>
                    <span className="type">
                        Explore Prime Video
                    </span>
                </div>


            </ul>


        </>
    )
}

export default Movies