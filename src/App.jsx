import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(prod => prod.id === item.id);
      if (existing) {
        return prevCart.map(prod =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <BrowserRouter>
      <NavBar cantidad={totalItems} />
      <Routes>
        <Route path="/" element={
          <>
            <ItemListContainer mensaje="¡MËLEꓘ Te da la bienvenida!" onAddToCart={handleAddToCart} />
          </>
        } />
        <Route path="/productos" element={<ItemListContainer mensaje="¡MËLEꓘ!" onAddToCart={handleAddToCart} />} />
        <Route path="/category/:id" element={<ItemListContainer mensaje="¡MËLEꓘ!" onAddToCart={handleAddToCart} />} />
        <Route path="/item/:id" element={<ItemDetailContainer handleAddToCart={handleAddToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
