/* eslint-disable no-multi-str */
import React from 'react'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemSet from '../../../utils/ItemsSet/ItemSet'
import ItemCard from '../NewReleasesItems/ItemCard'

const BestSellers = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <div style={{ margin: "auto", display: "flex", justifyContent: "center", borderRadius: "20px" }}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/Jupiter/TilesPhase4/elec/D28069901_IN_CEPC_Electronics_teaser-graphics_Jupiter-P1_Aug21_1500_h10d.jpg" alt="" style={{ width: "100%", marginTop: "4vh", marginBottom: "4vh" }} />
                </div>

                <ItemSet type={"NewReleases"} set={1} />

                <ItemCard />

                <BackToTop />
            </div>
        </div>
    )
}

export default BestSellers
