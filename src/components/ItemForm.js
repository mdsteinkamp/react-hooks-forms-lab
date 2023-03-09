import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, itemName, itemCategory, onItemChange, onCategoryChange }) {

  // const [itemName, setItemName] = useState("")
  // const [itemCategory, setItemCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState([])


  function handleFormSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory
    }
    // const dataArray = [...submittedData, newItem]
    setSubmittedData(newItem)
    // setItemName("")
    // setItemCategory("")
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => onItemChange(e.target.value)} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => onCategoryChange(e.target.value)} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
