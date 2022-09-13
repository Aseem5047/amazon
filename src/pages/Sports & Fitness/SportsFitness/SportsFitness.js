/* eslint-disable no-multi-str */
import React from 'react'
import BackToTop from '../../../components/BackToTop/BackToTop'
import ItemSet from '../../../utils/ItemsSet/ItemSet'
import ItemCard from '../SportsFitnessItems/ItemCard'

const SportsFitness = () => {
    return (
        <div className="home">
            <div className="home-contaner">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/1500x300_HPSP.jpg" alt="" style={{ width: "100vw", marginTop: "37px" }} />

                <ItemSet type={"Sports"} set={2}/>

                <ItemCard/>
                <BackToTop />
            </div>
        </div>
    )
}

export default SportsFitness
