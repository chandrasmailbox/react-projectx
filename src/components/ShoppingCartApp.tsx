import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

const ShoppingCartApp = () => {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    let updatedProducts = products.map((p) => {
      if (p.id === productId) {
        return { ...p, count: p.count + 1 };
      } else {
        return p;
      }
    });

    setProducts(updatedProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingCartApp;
