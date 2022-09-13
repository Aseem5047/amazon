/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ItemSet from '../../../utils/ItemsSet/ItemSet';



export default function ItemCard() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    db.collection("HomeKitchenData").onSnapshot((snapshot) => {
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

      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Home/bau/Decor/XCM_Manual_1500x300_1202741_1202741_IN_Home_Decor_Non_GW_BAU_1575984235_jpg._CB427170763_.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />

                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/COOP_20/Bajaj/Kitchen_AppliancesOct.jpg" alt="" style={{ width: "100vw", marginTop: "40px" }} />

      <div style={{ marginBottom: "0px" }}>

      <ItemSet type={"Kitchen"} set={2}/>
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

        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Lawnandgarden/June/Liveplants/Banners/1500x300.jpg" alt="" style={{ width: "100vw", marginTop: "7vh" }} />
                
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/T2/Bank-Stripe/FST/FST_1500x100_English.jpg" alt="" style={{ width: "100vw"}} />

      
    </>

  );
}

