/* eslint-disable no-multi-str */
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product'
import { db } from '../../../utils/Firebase'
import ProductScroll from '../../../components/Advertisement/HorizontalScroll/ProductScroll';
import ItemSet from '../../../utils/ItemsSet/ItemSet';


export default function ItemCard() {

  const [productData, setProductData] = useState([])


  useEffect(() => {
    db.collection("HomeProductsData").onSnapshot((snapshot) => {
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

      <div style={{ marginTop: "4rem" }}>
        <ItemSet type={"Home"} set={1} />
      </div>

      <div className="ScrollMenu">
        <ProductScroll type={"Laptops"} />
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

        <img src="./images/ad3.jpg" alt="" style={{ width: "100%", marginTop: "7vh" }} />
      </div>

    </>

  );
}

