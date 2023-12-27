/* eslint-disable no-multi-str */
import React from 'react'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemSet from '../../../utils/ItemsSet/ItemSet'
import ItemCard from '../HomeKitchenItems/ItemCard'

const HomeKitchen = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Jupiter-21/Slot_16_Curated-store_Banner_PC.gif" alt="" style={{ width: "100%", marginTop: "4vh", marginBottom: "4vh" }} />
                </div>

                <ItemSet type={"Kitchen"} set={1} />
                <ItemCard />
                <BackToTop />
            </div>
        </div>
    )
}

export default HomeKitchen
