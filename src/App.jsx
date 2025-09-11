import React from 'react';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Nosotros from './components/Nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="¡MËLEꓘ Te da la bienvenida!" />} />
          <Route path="/productos" element={<ItemListContainer mensaje="¡MËLEꓘ!" />} />
          <Route path="/category/:id" element={<ItemListContainer mensaje="¡MËLEꓘ!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
