/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';



export default function ItemCard() {

  
  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("NewReleasesData").onSnapshot((snapshot) => {
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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/ACQ__Electronics__Set1_1500_300_2210.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Accessories/Phase-3/1500X300_6.jpg" alt="" style={{ width: "100vw" }} />


      <div style={{ marginBottom: "0px" }}>

      <ItemSet type={"NewReleases"} set={2}/>

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
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/Jupiter/TilesPhase4/1500x300_learn_photography.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />


    </>

  );
}

