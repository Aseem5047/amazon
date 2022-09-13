/* eslint-disable no-multi-str */
import React from 'react'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemCard from '../ElectronicsItems/ItemCard'
import ItemSet from '../../../utils/ItemsSet/ItemSet'

const BestSellers = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wearables/Jupiter_21/Phase4/1500x300_desk_store_header_Tomorrow_unrec.jpg" alt="" style={{ width: "100vw", marginTop: "30px" }} />

                <ItemSet type={"Electronics"} set={1}/>

                <ItemCard/>

                <BackToTop />
            </div>
        </div>
    )
}

export default BestSellers
