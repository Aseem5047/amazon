/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';

export default function ItemCard() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("TrendingData").onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      snapshot.docs.map((doc) => {
        var data = doc.data()
        setProductData(product => [...product, data])
      });
    });
  }, []);

  return (
    <>
      <div className="products-container">

        {productData.slice(0, 8).map((items) => (
          <Product
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            rating={items.rating}
            image={items.image}
            specification={items.specification}
            detail={items.detail}
            type={items.type}
          />
        ))}

      </div>

      <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>


        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Jupiter-21/Slot_16_Curated-store_Banner_PC.gif" alt="" style={{ width: "100%", marginTop: "40px" }} />
      </div>


      <div style={{ marginBottom: "0px" }}>
        <ItemSet type={"Trending"} set={1} />
      </div>

      <div className="products-container">

        {productData.slice(8,).map((items) => (
          <Product
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            rating={items.rating}
            image={items.image}
            specification={items.specification}
            detail={items.detail}
            type={items.type}
          />
        ))}

      </div>

      <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>


        <img src="https://m.media-amazon.com/images/G/31/img19/AmazonDevices/jupiter/2000x200.jpg" alt="" style={{ width: "100%", marginTop: "7vh" }} />
      </div>

    </>

  );
}

