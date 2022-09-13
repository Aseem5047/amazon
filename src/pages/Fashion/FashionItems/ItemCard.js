/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';



export default function ItemCard() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("FashionData").onSnapshot((snapshot) => {
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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/Phase4_Slices/Main-bank_PC_Header2_ends_tomorrow_New.jpg" alt="" style={{ width: "100vw", marginTop: "7vh",marginBottom: "0vh" }} />

      <div style={{ marginBottom: "0px" }}>

      <ItemSet type={"Fashion"} set={1}/>

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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/T2/Bank-Stripe/FST/FST_1500x100_English.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />

    </>

  );
}

