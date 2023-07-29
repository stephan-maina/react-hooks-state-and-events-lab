import React, { useState } from 'react';

const Item = ({ name, category }) => {
  // Step 4: Implement Add to Cart Functionality
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {name} - {category}
      <button onClick={handleCartToggle}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;

