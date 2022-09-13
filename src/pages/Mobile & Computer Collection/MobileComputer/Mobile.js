/* eslint-disable no-multi-str */
import React from 'react'
import './MobileComputer.css'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemCard from '../MobileComputerItems/ItemCardMobile'
import ItemSet from '../../../utils/ItemsSet/ItemSet'

const MobileComputer = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Jupiter/Phase4/MobilesPage/P53006629_Jup21_Phase3_WLA_Mobiles-page_PC_1500_gold.jpg" alt="" style={{ width: "100vw", marginTop: "37px" }} />

                <ItemSet type={"Mobile"} set={1}/>

                <ItemCard />

                <BackToTop />

            </div>
        </div>
    )
}

export default MobileComputer
