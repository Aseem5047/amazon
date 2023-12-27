/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';

export default function ItemCard() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("EchoAlexaData").onSnapshot((snapshot) => {
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


        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Neel/July/meetalexapage/music/Casting-MLP-Graphic_Section_2.jpg" alt="" style={{ width: "100%", marginTop: "7vh" }} />

      </div>
      <div style={{ marginBottom: "0px" }}>

        <ItemSet type={"Alexa"} set={3} />

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
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Neel/rook/MA/daisydut_2018-04-13T06-00_8b3996_AlexaCom_rook.jpg" alt="" style={{ width: "100%", marginTop: "7vh" }} />
      </div>
      <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/T2/Bank-Stripe/FST/FST_1500x100_English.jpg" alt="" style={{ width: "100%" }} />
      </div>

      <ItemSet type={"Alexa"} set={1} />
      <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/bankOffer/1/HSBC_EMI-fest_stripe_1500x120.jpg" alt="" style={{ width: "100%", marginTop: "7vh" }} />
      </div>
      <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/bankOffer/1/LP_Stripe_PC.jpg" alt="" style={{ width: "100%" }} />
      </div>

    </>

  );
}

