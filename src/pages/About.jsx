import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Card from "../components/Card";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box mt={"16"} mb={"16"}>
        <Center>
          <VStack gap={6} placeItems={"flex-start"}>
            <Heading as={"h2"}>About this Website</Heading>
            <Text
              w={{ base: "90vw", md: "70vw", lg: "50vw", xl: "35vw" }}
              textAlign={"justify"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quia facilis sapiente ipsam tempora. Ab ut sequi sed aperiam nobis
              magni cupiditate eum distinctio harum quaerat, eos aliquid, rerum
              eaque esse necessitatibus odio quidem error deleniti a quisquam
              beatae? Tempore rem consequatur debitis, eius laboriosam ipsum
              earum possimus laborum enim. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cupiditate, aut exercitationem earum
              eum optio unde beatae commodi dignissimos quibusdam vitae!{" "}
            </Text>
            <Button
              type="button"
              size={"lg"}
              bgColor={"blue.100"}
              onClick={onOpen}
            >
              Read More...
            </Button>
          </VStack>
        </Center>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", sm: "md", md: "3xl", lg: "4xl", xl: "6xl" }}
        p={"2"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details of the Website !</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsum laboriosam ex doloribus modi beatae!
          </ModalBody>
          <ModalFooter>
            <HStack gap={3}>
              <Button type="button" size={"lg"} onClick={onClose}>
                Close
              </Button>
              <Button type="button" size={"lg"}>
                Products
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Card />
    </>
  );
};

export default About;
