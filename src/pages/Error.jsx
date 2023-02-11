import React from 'react';
import { useProductContext } from "../contexts/productContext";


const Error = () => {
  const name = useProductContext();
  return (
    <div>
      {name}
    </div>
  )
}

export default Error;