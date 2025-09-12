import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

const getTalles = (category) => {
  if (category === 'remeras' || category === 'pantalones') {
    return ['S', 'M', 'L'];
  }
  if (category === 'remeras' || category === 'buzos') {
    return ['S', 'M', 'L'];
  }
  if (category === 'pantalones') {
    return ['S', 'M', 'L'];
  }
  if (category === 'camperas') {
    return ['XL'];
  }
  return [];
};

const ItemDetail = ({ item, handleAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [selectedTalle, setSelectedTalle] = useState('');
  const navigate = useNavigate();
  const talles = getTalles(item.category);

  const onAdd = (quantity) => {
    if (!selectedTalle) {
      alert('Selecciona un talle antes de agregar al carrito');
      return;
    }
    const itemToAdd = { ...item, talle: selectedTalle };
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
        {talles.length > 0 && (
          <div className="talle-selector">
            <label htmlFor="talle-select">Talle: </label>
            <select
              id="talle-select"
              value={selectedTalle}
              onChange={e => setSelectedTalle(e.target.value)}
            >
              <option value="">Selecciona un talle</option>
              {talles.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        )}
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

