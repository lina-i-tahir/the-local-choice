import { createContext, useState } from "react";
import store from "./store";
import { productsArray, getProductData } from "./products";

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteOneToCart: () => {},
  getTotalCost: () => {},
});

export function CartPovider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  function getProductQty(id) {
    //   const product = store[0].products.find(
    //     (item) => item._id === parseInt(id)
    //   );
    const quantity = cartProducts.find(
      (product) => product._id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
  function addOneToCart(id) {
    const quantity = getProductQty(id);
    if (quantity === 0) {
      // product is not in card
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }
  function removeOneToCart(id) {
    const quantity = getProductQty(id);
    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: [],
    getProductQty,
    addOneToCart,
    removeOneToCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartPovider;
