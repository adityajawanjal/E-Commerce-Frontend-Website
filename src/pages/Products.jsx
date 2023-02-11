import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import Product from "../components/Product";
import { useProductContext } from "../contexts/productContext";

const Products = () => {
  const { products } = useProductContext();

  return (
    <>
      <HStack minH={"20"} justifyContent={"center"} gap={5}>
        <Text>All</Text>
        <Text>Men</Text>
        <Text>Women</Text>
      </HStack>
      <HStack
        wrap={"wrap"}
        justifyContent={"center"}
        gap={5}
        ml={"auto"}
        mr={"auto"}
        maxW={{ base: "full", xl: "90vw" }}
        h={"auto"}
        overflowX={"hidden"}
      >
        {products.map((e) => {
          return <Product key={e.id} title={e.title} img={e.images[0]} />;
        })}
      </HStack>
    </>
  );
};

export default Products;
