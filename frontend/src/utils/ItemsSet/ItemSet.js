import React, { useEffect, useState } from 'react'
import { CardView } from 'react-card-with-image';
import { db } from '../Firebase'

import 'react-card-with-image/dist/index.css'


const ItemSet = ({ type, set }) => {

    const [itemData, setItemData] = useState([])
    const [delay, setDelay] = useState(true)
    useEffect(() => {
        db.collection("ItemSets").doc(`ItemsSet${type}${set}`).collection(`ItemsSet${type}${set}`).onSnapshot((snapshot) => {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map((doc) => {
                var data = doc.data()
                setItemData(product => [...product, data])

            });
            setDelay(false)
        });

        // eslint-disable-next-line
    }, []);

    // setTimeout(() => setDelay(false), 2500);
    const item = itemData.map((item) =>
        item
    )

    var id = []
    var image = []
    var header = []
    var desc = []

    let length = item.length;

    for (var i = 0; i < (length); i++) {
        id.push(item[i].id)
        image.push(item[i].image)
        header.push(item[i].header)
        desc.push(item[i].description)
    }

    var data = [];
    for (var j = 0; j < 5; j++) {
        var obj = { "description": desc[j], "header": header[j], "id": id[j], "image": image[j] };
        data.push(obj);
    }

    // console.log(data);

    return (
        <>
            {/* <ItemSetView image={image} header={header} desc={desc}/> */}


            {!delay &&
                <CardView
                    key={data}
                    items={data}
                    activeColor='#000'
                    imageHeight='70%'
                    imageWidth='55%'
                />}
        </>
    )
}

export default ItemSet