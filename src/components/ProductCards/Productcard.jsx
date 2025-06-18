import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="description">{product.description}</p>
        <div className="price-button-container">
          <p className="price">Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;