import React from "react";
import {
  Heading,
  HStack,
  Image,
  DrawerBody,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.jpg";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        h={"24"}
        p={{ base: "5", sm: "10" }}
        justifyContent={"space-between"}
        position={"sticky"}
        top={"0.1px"}
        zIndex={1}
        borderBottom={"5px solid red"}
        bgColor={"whatsapp.100"}
      >
        <HStack
          gap={5}
          w={"full"}
          justifyContent={{
            base: "flex-start",
            sm: "center",
            md: "flex-start",
          }}
        >
          <Image
            src={Logo}
            alt="cart"
            w={"20"}
            h={"20"}
            borderRadius={"full"}
          />
          <Heading
            as={"h2"}
            fontSize={{
              base: "20px",
              sm: "28px",
              md: "32px",
              lg: "36px",
              xl: "40px",
            }}
            fontFamily={"cursive"}
          >
            Shop Karo
          </Heading>
        </HStack>
        <HStack
          gap={3}
          fontSize={"larger"}
          fontFamily={"sans-serif"}
          display={{ base: "none", md: "flex" }}
          fontStyle={"oblique"}
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
        </HStack>
        <HamburgerIcon
          display={{ base: "flex", md: "none" }}
          w={{ base: "7", sm: "10" }}
          h={{ base: "7", sm: "10" }}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement={"right"} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Visit More Pages</DrawerHeader>
            <DrawerBody onClick={onClose}>
              <VStack gap={3} align={"stretch"} pl={"5"} fontStyle={"oblique"}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
                <NavLink to={"/cart"}>My Orders</NavLink>
              </VStack>
            </DrawerBody>
            <DrawerFooter>Footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};

export default Navbar;
