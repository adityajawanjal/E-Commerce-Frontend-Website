import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <VStack minH={"100vh"} justifyContent={"space-between"} >
          <Box w={"full"} bgColor={"ThreeDFace"}>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route
                exact
                path="/single-product/:id"
                element={<SingleProduct />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Box>
          <Box w={"full"}>
            <Footer />
          </Box>
        </VStack>
      </BrowserRouter>
    </>
  );
};

export default App;
