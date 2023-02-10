import React from "react";
import { Box, Button, Center, Heading, Image, VStack } from "@chakra-ui/react";

const ContactCard = ({title , img , href , btnText}) => {
  return (
    <>
      <Box >
        <Center w={"56"} h={"72"} borderRadius={"3xl"} bgColor={"honeydew"}>
          <VStack gap={2}>
            <Heading as={"h4"} fontSize={"2xl"}>
              {title}
            </Heading>
            <Image
              src={img}
              alt="gmail"
              w={"28"}
              h={"24"}
              borderRadius={"3xl"}
            />
            <Button type="button" size={"lg"} bgColor={"blue.100"}>
              <a href={href}>{btnText}</a>
            </Button>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default ContactCard;
