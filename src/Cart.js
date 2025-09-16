import React from "react";

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>🛍 Cart</h2>
      {cart.map((item, i) => (
        <div key={i} style={{ marginBottom: 8, borderBottom: "1px solid #eee", paddingBottom: 4 }}>
          {item.title} × {item.qty} — ₹{item.price * item.qty}
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => alert("Order placed (demo)!")}>Checkout</button>
    </div>
  );
}
