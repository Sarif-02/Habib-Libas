import { useState } from 'react';

export function useCart() {
  const [items, setItems] = useState([]);

  const add = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i).filter((i) => i.qty > 0)
    );
  };

  const total   = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const count   = items.reduce((acc, i) => acc + i.qty, 0);

  return { items, add, updateQty, total, count };
}
