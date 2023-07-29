import React, { useState } from 'react';
import Item from './Item';

const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample list of items, including desserts
  const items = [
    { name: 'Apple', category: 'Fruits' },
    { name: 'Milk', category: 'Dairy' },
    { name: 'Bread', category: 'Bakery' },
    { name: 'Eggs', category: 'Dairy' },
    { name: 'Banana', category: 'Fruits' },
    { name: 'Cereal', category: 'Breakfast' },
    { name: 'Yogurt', category: 'Dairy' },
    { name: 'Orange Juice', category: 'Beverages' },
    { name: 'Carrots', category: 'Vegetables' },
    // Add more items here, including desserts
    { name: 'Chocolate Cake', category: 'Desserts' },
    { name: 'Ice Cream', category: 'Desserts' },
    { name: 'Cookies', category: 'Desserts' },
    { name: 'Fruit Tart', category: 'Desserts' },
  ];

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Beverages">Beverages</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Desserts">Desserts</option> {/* Added "Desserts" category */}
        {/* Add more categories here */}
      </select>

      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
