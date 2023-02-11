import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./productReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const API = "https://api.escuelajs.co/api/v1/products";
  // const API = "https://fakestoreapi.com/products";

  const initialState = {
    isLoading:false,
    products: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getAllProducts = async (url) => {
   try {
    const res = await axios.get(url);
    const allProducts = res.data;

    dispatch({ type: "ALL_PRODUCTS", payload: allProducts });
   } catch (err) {
    console.log(err);
   }
  };

  useEffect(() => {
    getAllProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
