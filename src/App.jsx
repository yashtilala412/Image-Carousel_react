import React from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./components/Product";
import FAQ from "./components/FAQ";
import { productData, responsive, faqData } from "./components/data";

export default function App() {
  const product = productData.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      <h1>FAQ</h1>
      <FAQ data={faqData} />
    </div>
  );
}
