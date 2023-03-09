import React from "react";

function Filter({ itemSearch, onSearchChange, selectedCategory, onCategoryChange }) {

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        onChange={e => onSearchChange(e.target.value)}
        value={itemSearch}
        placeholder="Search..." 
      />
      <select name="filter" 
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
