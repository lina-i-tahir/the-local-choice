import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* Render the product details */}
      <h1>{product.name}</h1>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add other product details as needed */}
    </>
  );
};

export default ProductDetail;
