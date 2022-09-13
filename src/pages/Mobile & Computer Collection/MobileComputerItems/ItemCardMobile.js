/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';



export default function ItemCard() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("MobileData").onSnapshot((snapshot) => {
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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AdvantagePrime/Quiz/Jupiter/Event/Phase4/D28903577_Jupiter_P1_WLD_Advantage-Justfor-Prime_PC_Ingress_header_1500x300.jpg" alt="" style={{ width: "100vw", marginTop: "7vh"}} />

      <img src="https://m.media-amazon.com/images/G/31/img19/AmazonDevices/jupiter/2000x200.jpg" alt="" style={{ width: "100vw" }} />

      <div style={{ marginBottom: "0px" }}>

      </div>

      <ItemSet type={"Mobile"} set={2}/>

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

    </>

  );
}

