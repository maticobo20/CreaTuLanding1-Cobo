import React, { useState } from 'react';
import '../css/Item.css';
import { Link, useNavigate } from 'react-router-dom';

const getTalles = (category) => {
  if (category === 'remeras' || category === 'pantalones') {
    return ['S', 'M', 'L'];
  }
  if (category === 'camperas') {
    return ['XL'];
  }
  return [];
};

const Item = ({ id, name, price, img, stock, onAddToCart, category }) => {
    const navigate = useNavigate();
    const [selectedTalle, setSelectedTalle] = useState('');
    const talles = getTalles(category);

    const handleBuy = () => {
        navigate(`/item/${id}`);
    };

    const handleAddToCart = () => {
        if (!selectedTalle) {
            alert('Selecciona un talle antes de agregar al carrito');
            return;
        }
        const itemToAdd = { id, name, price, img, stock, category, talle: selectedTalle };
        if (onAddToCart) onAddToCart(itemToAdd, 1);
    };

    return (
        <div className="item-card">
            <img src={img} alt={name} className="product-image" />
            <h2 className="item-name">{name}</h2>
            <p className="item-price">${price}</p>
            <p className="item-stock">Stock disponible: {stock}</p>
            {talles.length > 0 && (
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor={`talle-select-${id}`}>Talle: </label>
                    <select
                        id={`talle-select-${id}`}
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
            <div className="item-btn-group">
                <button className="item-btn comprar-btn" onClick={handleBuy}>Comprar</button>
                <Link to={`/item/${id}`} className="item-btn">Ver más</Link>
                {talles.length > 0 && (
                    <button className="item-btn" onClick={handleAddToCart}>Agregar al carrito</button>
                )}
            </div>
        </div>
    );
};

export default Item;