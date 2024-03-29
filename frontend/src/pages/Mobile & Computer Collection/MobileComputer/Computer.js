/* eslint-disable no-multi-str */
import React from 'react'
import './MobileComputer.css'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemCard from '../MobileComputerItems/ItemCardComputer'
import ItemSet from '../../../utils/ItemsSet/ItemSet'

const MobileComputer = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Accessories/Phase-3/1500X300_Tablet_Acc.jpg" alt="" style={{ width: "100%", marginTop: "30px" }} />
                </div>

                <ItemSet type={"Computer"} set={1} />

                <ItemCard />
                <BackToTop />

            </div>
        </div>
    )
}

export default MobileComputer
