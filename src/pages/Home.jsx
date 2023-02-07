import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Box mb={"20"}>
        <Center w={"full"} h={"auto"} p={{ base: "10px", sm: "20px" }}>
          <HStack
            flexWrap={"wrap-reverse"}
            gap={5}
            w={{ base: "full", lg: "container.lg", xl: "container.xl" }}
            justifyContent={"center"}
          >
            <VStack
              w={{ base: "full", md: "45%" }}
              justifyContent={"space-evenly"}
              gap={6}
              m={"3"}
              borderRadius={"3xl"}
              placeItems={"flex-start"}
            >
              <Heading as={"h2"}>Shop Karo !</Heading>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem incidunt sit reprehenderit dolores asperiores
                doloremque, ea, dolor harum, explicabo optio fuga commodi. Optio
                quidem minima debitis inventore deleniti harum id!
              </Text>
              <Button type="button" size={"lg"} bgColor={"blue.100"}>
                Shop Products
              </Button>
            </VStack>
            <Image
              src="https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?"
              alt="logo"
              w={{ base: "full", md: "45%" }}
              h={"auto"}
              p={"3"}
              borderRadius={"3xl"}
            />
          </HStack>
        </Center>
      </Box>
      <Card />
    </>
  );
};

export default Home;
