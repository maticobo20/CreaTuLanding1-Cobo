import React, { useState } from 'react';
import '../css/ItemCount.css';

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    if (count > initial) setCount(count - 1);
  };

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls">
        <button onClick={restar} disabled={count <= initial}>-</button>
        <span>{count}</span>
        <button onClick={sumar} disabled={count >= stock}>+</button>
      </div>
      <button className="item-count-add" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
