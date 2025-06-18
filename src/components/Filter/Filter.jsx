import React from 'react';
import './Filter.css';
import { useProduct } from '../../context/ProductContext';

const Filter = () => {
  const { handleSortChange } = useProduct();

  const handleChange = (e) => {
    handleSortChange(e.target.value);
  };

  return (
    <div className="filter-container">
      <select className="filter-select" onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Sort by Price
        </option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="low-to-high">Price: Low to High</option>
      </select>
    </div>
  );
};

export default Filter;