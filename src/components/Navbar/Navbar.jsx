import React from 'react';
import './Navbar.css';
import { useProduct } from '../../context/ProductContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useProduct();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-logo">
        <span style={{ fontWeight: 'bold' }}>ShopEasy</span>
      </div>
      <div className="navbar-actions">
        <button className="toggle-btn" onClick={handleToggle}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;