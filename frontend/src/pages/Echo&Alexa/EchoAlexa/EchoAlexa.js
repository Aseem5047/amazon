/* eslint-disable no-multi-str */
import React from 'react'
import ItemSet from '../../../utils/ItemsSet/ItemSet'
import ItemCard from '../EchoAlexaItems/ItemCard.js';

const EchoAlexa = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/MEDH/LandingPage/PC/MEDH_LP_01_1500x.jpg" alt="" style={{ width: "100%", marginTop: "37px" }} />
                </div>
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/MEDH/LandingPage/PC/MEDH_LP_02_1500x_GIF.gif" alt="" style={{ width: "100%" }} />
                </div>

                <ItemSet type={"Alexa"} set={2} />
                <ItemCard />

            </div>
        </div>
    )
}

export default EchoAlexa
