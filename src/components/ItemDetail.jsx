import React, { useState } from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({ item, handleAddToCart }) => {
  const [added, setAdded] = useState(false);

  const onAdd = (quantity) => {
    handleAddToCart(item, quantity);
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
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        {added && (
          <div className="add-confirmation">
            ¡Producto agregado al carrito!
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

