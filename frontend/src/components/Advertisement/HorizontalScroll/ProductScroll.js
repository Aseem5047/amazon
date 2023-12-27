import React, { useContext, useState, useEffect } from 'react'
import "./HorizontalScroll.css"
import { Link } from 'react-router-dom'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import { db } from '../../../utils/Firebase'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <ArrowBackIosIcon />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <ArrowForwardIosIcon />
        </Typography>
    );
};

const ProductScroll = ({ type }) => {

    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        db.collection("Banner").doc(`Banner${type}`).collection(`Banner${type}`).onSnapshot((snapshot) => {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map((doc) => {
                var data = doc.data()
                setBannerData(product => [...product, data])

            });
        });
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="productScroll">
                {bannerData.map((item) => (
                    <Box
                        key={item.id}
                        itemId={item.id}
                        title={item.title}
                        m="0 40px"
                    >
                        <Link to={`/AdvertiseProduct/${type}/${item.id}`}>
                            <img id="productScrollImg" src={item.image} alt="png" />
                            <p className="productTitle" >{item.title}</p>
                        </Link>
                    </Box>
                ))}
            </ScrollMenu>

        </>
    )
}

export default ProductScroll