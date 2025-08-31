import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/AsyncMock';
import ItemList from './ItemList';
import '../css/ItemListContainer.css';
import { useCart } from '../context/CartContext';

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (id && id !== 'todos') {
                    setData(res.filter(producto => producto.category === id));
                } else {
                    setData(res);
                }
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="item-list-container">
            <h1 className="title">{mensaje}</h1>
            <div className="products-grid">
                <ItemList data={data} onAddToCart={addToCart} />
            </div>
        </div>
    );
};

export default ItemListContainer;