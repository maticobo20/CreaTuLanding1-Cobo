import React, { useState, useEffect } from 'react';
import { getProducts } from '../mock/AsyncMock';
import ItemList from './ItemList';
import '../css/ItemListContainer.css';

const ItemListContainer = ({ mensaje, onAddToCart }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => setData(res))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="item-list-container">
            <h1 className="title">{mensaje}</h1>
            <div className="products-grid">
                <ItemList data={data} onAddToCart={onAddToCart} />
            </div>
        </div>
    );
};

export default ItemListContainer;