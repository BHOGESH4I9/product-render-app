import React from 'react';
import ProductCard from '../ProductCards/Productcard';
import './ProductList.css';
import { useProduct } from '../../context/ProductContext';

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        products.map(product => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;