import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h1>Flipkart Demo Store</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}
