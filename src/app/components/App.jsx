"use client";
// import { useState } from "react";
// import ProductList from "../components/ProductList";
// import Basket from "../components/Basket";

// const App = ({ initialProducts, categories }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const updateCartQuantity = (productId, newQuantity) => {
//     setCart((prevCart) => {
//       if (newQuantity === 0) {

//         return prevCart.filter((product) => product.id !== productId);
//       }

//       return prevCart.map((product) => (product.id === productId ? { ...product, quantity: newQuantity } : product));
//     });
//   };

//   return (
//     <div>
//       <Basket cart={cart} updateCartQuantity={updateCartQuantity} />
//       <ProductList initialProducts={initialProducts} categories={categories} addToCart={addToCart} />
//     </div>
//   );
// };

// export default App;import ProductList from "./ProductList";

import Basket from "./Basket";
import useCartStore from "../store/cartStore";
import ProductList from "./ProductList";

const App = ({ initialProducts, categories }) => {
  const { cart, addToCart, updateCartQuantity } = useCartStore();

  return (
    <div>
      <h1>Min Shop</h1>
      <Basket cart={cart} updateCartQuantity={updateCartQuantity} />
      <ProductList initialProducts={initialProducts} categories={categories} addToCart={addToCart} />
    </div>
  );
};

export default App;
