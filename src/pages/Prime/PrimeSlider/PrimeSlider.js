import React, { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { SliderItems } from './Data/SliderItems'
import { FeatureList } from './Data/FeatureList'

import './PrimeSlider.css'

const PrimeSlider = () => {
    const [type, setType] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = SliderItems.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
        FeatureList.map((feature) =>

            (
                index === feature.setIndex ||
                index === feature.nextIndex ||
                index === feature.nextToNextIndex
            )

            && setType(feature.type)

        )
    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)

        return () => {
            clearInterval(slider);
        }
    }, [index])

    // console.log(type);

    return (
        <>
            <div className="primeFeaturesList">

                {FeatureList.map((feature, id) => (
                    <div className={`${type === feature.type ? "currentFeature" : "feature"}`}

                        onClick={() => setIndex(feature.setIndex)}

                        style={
                            {
                                background: `${feature.background}`,
                            }
                        }
                        key={id}

                    >
                        < div className="mainContainer" style={
                            {
                                backgroundImage: `url(${feature.image})`,
                            }
                        } key={id} />
                        <div className="featureTitle">
                            <span>{feature.title}</span>
                        </div>
                    </div>

                ))}

            </div >
            <div className="SliderMain">

                <ul className="items-list">
                    {
                        SliderItems.map((item, id) => {

                            let position = "nextItem";
                            if (id === index) {
                                position = "activeItem"
                            }
                            if (id === index - 1 || (index === 0 && id === SliderItems.length - 1)) {
                                position = "lastItem"
                            }

                            return (


                                <li
                                    className={position}
                                    key={id}
                                    style={{
                                        backgroundImage: `url(${item.image})`
                                    }}
                                    itemType={item.type}
                                >

                                    {/* <div className="SliderItemsBackground" style={{
                                    
                                }} /> */}
                                    < div className="SliderItemsContent" >
                                        <span className="SliderItemsTitle"
                                            style={
                                                {
                                                    background: `${item.titleBackground}`,
                                                    color: "white"
                                                }
                                            }>{(item.title).toUpperCase()}</span>
                                        <span className="SliderItemsSub" >{item.subtitle}</span>
                                        <span className="SliderItemsDesc" >{item.desc}</span>
                                        <span className="SliderItemsType" >{item.type}</span>
                                    </div>
                                </li>

                            )
                        })


                    }
                    <div className="SliderLeft" onClick={() => setIndex(index - 1)}>
                        <p>
                            <ArrowBackIosIcon />
                        </p>
                    </div>
                    <div className="SliderRight" onClick={() => setIndex(index + 1)}>
                        <p>
                            <ArrowForwardIosIcon />
                        </p>
                    </div>

                </ul >
            </div >
        </>
    )
}

export default PrimeSlider