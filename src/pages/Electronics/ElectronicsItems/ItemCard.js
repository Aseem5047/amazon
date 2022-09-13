/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';



export default function ItemCard() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("ElectronicsData").onSnapshot((snapshot) => {
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
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/Jup21/P4_PC-banner_GROOMING.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Jupiter21/Phase4/D29756085_IN_OP_Jup21-graphics_P2_1500x200.jpg" alt="" style={{ width: "100vw" }} />
      <div style={{ marginBottom: "0px" }}>

      <ItemSet type={"Electronics"} set={2}/>

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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/Jupiter/TilesPhase4/1500x300_learn_photography.jpg" alt="" style={{ width: "100vw" , marginTop: "7vh"}} />


    </>

  );
}

