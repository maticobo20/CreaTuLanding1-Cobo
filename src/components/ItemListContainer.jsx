import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';
import ItemList from './ItemList';
import LoaderComponent from './LoaderComponent';
import '../css/ItemListContainer.css';
import { useCart } from '../context/CartContext';

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const { addToCart } = useCart();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const productsRef = collection(db, 'productos');
        let productsQuery;
        if (id && id !== 'todos') {
            productsQuery = query(productsRef, where('category', '==', id));
        } else {
            productsQuery = productsRef;
        }
        getDocs(productsQuery)
            .then((snapshot) => {
                const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(productos);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="item-list-container">
            <h1 className="title">{mensaje}</h1>
            {loading ? (
                <LoaderComponent />
            ) : (
                <div className="products-grid">
                    <ItemList data={data} onAddToCart={addToCart} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;