import React from "react";

interface CatProduct {
  name: string;
  price: number;
  cuteness: number; // 1-10 scale, all cats are 11
  description: string;
}

export const CatCard: React.FC<{ product: CatProduct }> = ({ product }) => (
  <div className="cat-card">
    <h3>{product.name}</h3>
    <p className="price">${product.price.toFixed(2)}</p>
    <p className="cuteness">{"\u2B50".repeat(Math.min(product.cuteness, 5))}</p>
    <p>{product.description}</p>
    <button>Add to Cart (Meow!)</button>
  </div>
);
