/* eslint-disable no-multi-str */
import React from 'react'
import './Home.css';

import {
    Banner14, Banner15, Banner16, Banner17, Banner18, Banner19, Banner20, Banner21, Banner22, Banner23, Banner24, Banner25, Banner26, Banner27, Banner28, Banner29, Banner30, Banner31, Banner32, Banner33, Banner34, Banner35, Banner36, Banner37, Banner38, Banner39, Banner40
} from '../../BannerImages/index'

import Slider from '../../components/Slider/Slider'

import { FashionSet1 } from '../../utils/Advertisement/Fashion'
import { ElectronicsSet1 } from '../../utils/Advertisement/Electronics'
import BackToTop from '../../components/BackToTop/BackToTop';
import ItemCard from './ItemCards/ItemCard';
import HorizontalScroll from '../../components/Advertisement/HorizontalScroll/HorizontalScroll';
import Four from '../../components/Advertisement/Four/Four';
import ProductScroll from '../../components/Advertisement/HorizontalScroll/ProductScroll';
import { ScrollSet1 } from '../../utils/Advertisement/HorizontalScroll'
import ItemSet from '../../utils/ItemsSet/ItemSet';
import 'react-card-with-image/dist/index.css'

const Home = () => {
    const bannerImages = [Banner25, Banner15, Banner14, Banner16, Banner17, Banner18, Banner19, Banner20, Banner21, Banner22, Banner23, Banner24, Banner26, Banner27, Banner28, Banner29, Banner30, Banner31, Banner32, Banner33, Banner34, Banner35, Banner36, Banner37, Banner38, Banner39, Banner40]

    return (
        <div>
            <div className="home" style={{ width: "100vw" }}>
                <div className="home-container" style={{ width: "100vw" }}>

                    <div className="slider">
                        <Slider images={bannerImages} />

                        <div className="four">
                            {FashionSet1.map((item) => (
                                <Four
                                    key={item.id}
                                    header={item.header}
                                    image={item.image}
                                    link={item.link}

                                />
                            ))}
                        </div>

                        <ItemSet type={"Home"} set={2} />

                        <div className="ScrollMenu">
                            <ProductScroll type={"Fashion"} />
                        </div>

                        <div >

                            <div className="scroller">
                                {ScrollSet1.map((item) => (
                                    <HorizontalScroll
                                        key={item.id}
                                        header={item.header}
                                        image={item.image}
                                        link={item.link}

                                    />
                                ))}
                            </div>
                            <div className="scroller">
                                {ElectronicsSet1.map((item) => (
                                    <HorizontalScroll
                                        key={item.id}
                                        header={item.header}
                                        image={item.image}
                                        link={item.link}

                                    />
                                ))}
                            </div>

                        </div>
                    </div>


                    <div style={{ marginTop: "20px" }}>

                        <ItemCard />

                        <BackToTop />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home
