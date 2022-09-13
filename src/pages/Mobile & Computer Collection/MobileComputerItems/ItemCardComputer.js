/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';



export default function ItemCard() {

  
  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("LaptopData").onSnapshot((snapshot) => {
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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Jupiter2021/UpgradeDays/PC_Billboard_DrawingTablet_1500_Lite.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />

      <div style={{ marginBottom: "0px" }}>

      </div>

      <ItemSet type={"Computer"} set={2}/>

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

      <img src="https://m.media-amazon.com/images/G/31/img19/AmazonDevices/jupiter/2000x200.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />

    </>

  );
}

