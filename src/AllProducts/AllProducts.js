import React, { useState, useEffect } from 'react'
import { db } from '../utils/Firebase'

const collections = [
    'EchoAlexaData', 'ElectronicsData', 'FashionData', 'HomeKitchenData', 'HomeProductsData', 'LaptopData', 'MobileData', 'NewReleasesData', 'SportsFitnessData', 'TrendingData'
]

let Allproducts = []

const AllProducts = () => {
    const [itemData, setItemData] = useState([])
    useEffect(() => {
        collections.forEach((category) => {
            db.collection(category).get().then((userSnapshot) => {

                userSnapshot.forEach((doc) => {
                    // eslint-disable-next-line 
                    const { detail, image, price, rating, specification, title, type } = doc.data();
                    Allproducts.push({
                        id: doc.id,
                        image: image,
                        detail: detail,
                        price: price,
                        rating: rating,
                        specification: specification,
                        title: title,
                        type: type,
                    });
                });
                setItemData(Allproducts);
            })
        })
    }, [])

    console.log(itemData);

    return (
        <>

        </>
    )
}

export default AllProducts
