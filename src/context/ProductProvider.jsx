
import React, { useEffect, useState, useCallback } from 'react';
import { ProductContext } from '../context/ProductContext'; 

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleCategoryClick = useCallback(async (category) => {
    setSelectedCategory(category);

    const url =
      category === 'All'
        ? 'https://dummyjson.com/products'
        : `https://dummyjson.com/products/category/${category}`;

    const res = await fetch(url);
    const data = await res.json();
    let sortedProducts = data.products;

    if (sortOption === 'high-to-low') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'low-to-high') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  }, [sortOption]);

  const handleSortChange = useCallback((sortValue) => {
    setSortOption(sortValue);
    let sortedProducts = [...products];

    if (sortValue === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        selectedCategory,
        setSelectedCategory,
        sidebarOpen,
        setSidebarOpen,
        darkMode,
        setDarkMode,
        sortOption,
        handleCategoryClick,
        handleSortChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
