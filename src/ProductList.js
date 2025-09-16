import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "products"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProducts(list);
    }
    load();
  }, []);

  return (
    <div>
      <h2>🛒 Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 8 }}>
            <img src={p.images?.[0]} alt={p.title} style={{ width: "100%", height: 120, objectFit: "cover" }} />
            <h4>{p.title}</h4>
            <div>₹{p.price}</div>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
