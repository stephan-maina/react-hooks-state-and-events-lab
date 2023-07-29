import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  // Step 3: Set Up Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Draw Component Hierarchy and pass the necessary props to ShoppingList
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
