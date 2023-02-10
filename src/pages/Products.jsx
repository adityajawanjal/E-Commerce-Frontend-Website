import React, { useEffect } from "react";
import Product from "../components/Product";


// axios.get("https://pujakasaman/api/products");

const Products = () => {
  useEffect(() => {
    console.log("hi");
  }, []);

  return (
    <>
      <Product />
    </>
  );
};

export default Products;
