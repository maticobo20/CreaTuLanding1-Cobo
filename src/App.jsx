import React from 'react'; 
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <ItemListContainer mensaje="¡MËLEꓘ Te da la bienvenida!" />
          </>
        } />
        <Route path="/productos" element={<ItemListContainer mensaje="¡MËLEꓘ!"/>} />
        <Route path="/category/:id" element={<ItemListContainer mensaje="¡MËLEꓘ!"/>} />
        <Route path="/categoria/:id" element={<ItemListContainer mensaje="¡MËLEꓘ!"/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
