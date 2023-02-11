import React from "react";
import { Button, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Product = ({title , img}) => {
  return (
    <>
      <Center
        m={"6"}
        w={"56"}
        h={"64"}
        border={"2px solid black"}
        borderRadius={"3xl"}
      >
        <VStack justifyContent={"space-evenly"}>
        {/* "https://m.media-amazon.com/images/I/610fN3RyKFL._UY500_.jpg" */}
          <Image
            src={img}
            alt="shoes"
            w={"32"}
            h={"32"}
            borderRadius={"3xl"}
          />
          <Text>{title}</Text>
          <HStack>
            <Button type="button" size={"md"}>
              Items: {4}
            </Button>
            <Button type="button" size={"md"}>
              Add to cart
            </Button>
          </HStack>
        </VStack>
      </Center>
    </>
  );
};

export default Product;
