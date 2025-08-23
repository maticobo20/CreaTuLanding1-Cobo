import React from 'react';


const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail-horizontal">
      <img src={item.img} alt={item.name} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span className="item-detail-price">${item.price}</span>
        <p className="item-stock">Stock disponible: {item.stock}</p>
        <button className="add-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;

