import React from "react";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const List = [
    {
      id: 1,
      title: "G-Mail",
      img: "https://3.bp.blogspot.com/-O231QKWcdH0/VGIFcFuWo5I/AAAAAAAAPnE/S3a8H6twUoE/s1600/logo_gmail_color_112in128dp.png",
      btnText: "Send Mail",
    },
    {
      id: 2,
      title: "G-Mail",
      img: "https://3.bp.blogspot.com/-O231QKWcdH0/VGIFcFuWo5I/AAAAAAAAPnE/S3a8H6twUoE/s1600/logo_gmail_color_112in128dp.png",
      btnText: "Send Mail",
    },
    {
      id: 3,
      title: "G-Mail",
      img: "https://3.bp.blogspot.com/-O231QKWcdH0/VGIFcFuWo5I/AAAAAAAAPnE/S3a8H6twUoE/s1600/logo_gmail_color_112in128dp.png",
      btnText: "Send Mail",
    },
    
  ];
  return (
    <>
      <Box mt={"10"} mb={"20"}>
        <Center>
          <VStack gap={5} p={"5"}>
            <Heading as={"h2"}>Contact Me</Heading>
            <Text textAlign={"justify"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              quibusdam porro optio enim quaerat cupiditate.
            </Text>
          </VStack>
        </Center>
      </Box>
      <Center mb={"28"}>
        <HStack
          wrap={"wrap"}
          gap={10}
          w={"full"}
          justifyContent={{ base: "space-evenly", md: "flex-start" }}
         pl={{md:"8",lg:"14",xl:"20"}}
        >
          {List.map((e) => {
            return (
              <>
                <ContactCard key={e.id} title={e.title} img={e.img} btnText={e.btnText} />
              </>
            );
          })}
        </HStack>
      </Center>
    </>
  );
};

export default Contact;
