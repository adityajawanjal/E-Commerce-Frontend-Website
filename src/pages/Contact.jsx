import React from "react";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

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
          pl={{ md: "8", lg: "14", xl: "20" }}
        >
          {List.map((e) => {
            return (
              <>
                <ContactCard
                  key={e.id}
                  title={e.title}
                  img={e.img}
                  btnText={e.btnText}
                />
              </>
            );
          })}
        </HStack>
      </Center>
      <ContactForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984572!2d72.74109975285948!3d19.082197839427938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1675787034839!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
        style={{ width: "90vw", height: "50vh", margin: "0 auto 50px auto" }}
      ></iframe>
    </>
  );
};

export default Contact;
