import React from 'react';
import CategoriesBar from './components/Category/Categories';
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import { useProduct } from '../src/context/ProductContext';
import './App.css';


function App() {
  const { sidebarOpen, darkMode, selectedCategory } = useProduct();

  return (
    <div className={`App ${sidebarOpen ? 'sidebar-open' : ''} ${darkMode ? 'dark' : ''}`}>
      <Navbar />
      <div className="main-content">
        <div className="content-wrapper">
          <CategoriesBar />
          <div className="product-section">
            <div className="product-header">
              <h2>{selectedCategory} Products</h2>
              <Filter />
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;