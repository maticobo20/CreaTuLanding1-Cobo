import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ item, handleAddToCart }) => {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    // Creamos el objeto con la cantidad seleccionada
    const itemToAdd = { ...item };
    handleAddToCart(itemToAdd, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="item-detail-horizontal">
      <img src={item.img} alt={item.name} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span className="item-detail-price">${item.price}</span>
        <p className="item-stock">Stock disponible: {item.stock}</p>
        {!added ? (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        ) : (
          <button className="finish-purchase-btn" onClick={() => navigate('/cart')}>Terminar mi compra</button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

