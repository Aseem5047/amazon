/* eslint-disable no-multi-str */
import React from 'react'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemSet from '../../../utils/ItemsSet/ItemSet'

import ItemCard from '../BestSellerItems/ItemCard'

const BestSellers = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>

                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/Jupiter21/Phase3/HPB/CEPC-pc.png" alt="" style={{ width: "100%", marginTop: "30px" }} />
                </div>

                <ItemSet type={"Trending"} set={2} />

                <ItemCard />

                <BackToTop />

            </div>
        </div>
    )
}

export default BestSellers
