import React, { useState } from 'react'; 
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import CartWidget from './components/CartWidget'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <NavBar cantidad={cartCount} />
      <ItemListContainer mensaje="¡MËLEꓘ Te da la bienvenida!" onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
