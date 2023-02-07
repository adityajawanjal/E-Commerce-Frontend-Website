import React from "react";
import { Box, Center, Grid, Image } from "@chakra-ui/react";

const Card = () => {
  return (
    <>
      <Center pt={"24"} pb={"24"}>
        <Box>
          <Grid
            templateColumns={{ base: "auto", md: "repeat(3,1fr)" }}
            gap={10}
          >
            <SingleCard
              title={"Get access to full website and source code"}
              img={
                "https://imgd.aeplcdn.com/0x0/ec/C5/A7/11148/img/m/Mercedes-Benz-logo-19780_l.jpg?q=75"
              }
            />
            <Grid gap={10}>
              <SingleCard
                title={"Fast Delivery"}
                img={
                  "https://imgd.aeplcdn.com/0x0/ec/C5/A7/11148/img/m/Mercedes-Benz-logo-19780_l.jpg?q=75"
                }
              />
              <SingleCard
                title={"Hello 3"}
                img={
                  "https://imgd.aeplcdn.com/0x0/ec/C5/A7/11148/img/m/Mercedes-Benz-logo-19780_l.jpg?q=75"
                }
              />
            </Grid>
            <SingleCard
              title={"Hello 4"}
              img={
                "https://imgd.aeplcdn.com/0x0/ec/C5/A7/11148/img/m/Mercedes-Benz-logo-19780_l.jpg?q=75"
              }
            />
          </Grid>
        </Box>
      </Center>
    </>
  );
};

const SingleCard = ({ title, img }) => {
  return (
    <>
      <Center
        w={{ base: "90vw", md: "52", lg: "72", xl: "96" }}
        h={"100%"}
        p={"12"}
        boxShadow={"dark-lg"}
        borderRadius={"3xl"}
        bgColor={"whiteAlpha.900"}
      >
        <Image src={img} alt="cart" w={"16"} borderRadius={"full"} pr={"5"} />
        <Box textAlign={"justify"}>{title}</Box>
      </Center>
    </>
  );
};

export default Card;
