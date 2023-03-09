import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemSearch, setItemSearch] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  const [array, setArray] = useState(items)
  
  function handleCategoryChange(selectedCategory) {
    setSelectedCategory(selectedCategory);
  }

  function onSearchChange(itemSearch) {
    console.log(itemSearch)
    setItemSearch(itemSearch)
  }

  function onItemChange (itemName) {
    console.log(itemName)
    setItemName(itemName)
  }

  function onCategoryChange(itemCategory) {
    console.log(itemCategory)
    setItemCategory(itemCategory)
  }

  function onItemFormSubmit(itemArray) {
    console.log(itemArray)
    setArray([...items, itemArray])
    console.log(array)
  }


  const itemsToDisplay = array
    .filter(item => {
      if (selectedCategory === "All") {
        return true
      } else {
        return item.category === selectedCategory
      }
    })
    .filter(item => item.name.includes(itemSearch))

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit}
        itemName={itemName}
        onItemChange ={onItemChange}
        itemCategory={itemCategory}
        onCategoryChange={onCategoryChange}
      />
      <Filter 
        itemSearch={itemSearch} 
        onSearchChange={onSearchChange} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;