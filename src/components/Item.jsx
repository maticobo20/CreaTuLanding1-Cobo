import React from 'react';
import '../css/Item.css';
import { Link } from 'react-router-dom';


const Item = ({ id, name, price, img, stock, onAddToCart }) => {
    return (
        <div className="item-card">
            <img src={img} alt={name} className="product-image" />
            <h2 className="item-name">{name}</h2>
            <p className="item-price">${price}</p>
            <p className="item-stock">Stock disponible: {stock}</p>
            <div className="item-btn-group">
                <button className="item-btn comprar-btn" onClick={onAddToCart}>Comprar</button>
                <Link to={`/item/${id}`} className="item-btn">Ver más</Link>
            </div>
        </div>
    );
};

export default Item;