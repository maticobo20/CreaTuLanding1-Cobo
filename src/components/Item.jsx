import React from 'react'
import '../css/Item.css'

const Item = ({ name, price, img, onAddToCart }) => {
    return (
        <div className="item-card">
            <img src={img} alt={name} className="product-image" />
            <h2 className="item-name">{name}</h2>
            <p className="item-price">${price}</p>
            <div className="item-btn-group">
                <button className="item-btn comprar-btn" onClick={onAddToCart}>Comprar</button>
                <button className="item-btn">Ver más</button>
            </div>
        </div>
    );
};

export default Item;