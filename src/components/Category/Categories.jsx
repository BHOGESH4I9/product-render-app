import React, { useEffect, useState, useContext } from 'react';
import { FaThList } from 'react-icons/fa';
import './Categories.css';
import { ProductContext } from '../../context/ProductContext'; 

const CategoriesBar = () => {
  const {
    sidebarOpen,
    setSidebarOpen,
    handleCategoryClick,
  } = useContext(ProductContext); 

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && typeof data[0] === 'string') {
          setCategories(data);
          setFilteredCategories(data);
        } else if (Array.isArray(data) && typeof data[0] === 'object') {
          const categoryNames = data.map(cat => cat.name || cat.slug);
          setCategories(categoryNames);
          setFilteredCategories(categoryNames);
        }
      });
  }, []);

  useEffect(() => {
    const filtered = categories.filter(cat =>
      cat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchTerm, categories]);

  return (
    <div className="categories-container">
      <button
        className={`toggle-icon ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="icon-wrapper">
          <FaThList size={20} />
        </span>
        Categories
      </button>
      
      {sidebarOpen && (
        <div className="sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={() => handleCategoryClick('All')} className="category-btn">
            All
          </button>
          {filteredCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="category-btn"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesBar;
