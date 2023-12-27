/* eslint-disable no-multi-str */
import React from 'react'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemSet from '../../../utils/ItemsSet/ItemSet'
import ItemCard from '../FashionItems/ItemCard'

const Fashion = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Jupiter_21/Wave4/AF/MainHeaders/EndsTomorrow/FINAL-PC-EVENT-TOP-BANNER_E1_Eng_Tomorrow.jpg" alt="" style={{ width: "100%", marginTop: "4vh", marginBottom: "4vh" }} />
                </div>

                <ItemSet type={"Fashion"} set={2} />

                <ItemCard />
                <BackToTop />
            </div>
        </div>
    )
}

export default Fashion
