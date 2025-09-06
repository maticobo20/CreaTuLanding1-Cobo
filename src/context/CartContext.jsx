import React, { createContext, useContext, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addItem = async (item, quantity) => {
    try {
      const itemRef = doc(db, 'productos', item.id);
      const itemSnap = await getDoc(itemRef);
      if (!itemSnap.exists()) {
        alert('Producto no encontrado en la base de datos');
        return;
      }
      const stockActual = itemSnap.data().stock;
      if (stockActual < quantity) {
        alert('No hay suficiente stock disponible');
        return;
      }
      await updateDoc(itemRef, { stock: stockActual - quantity });
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
    } catch (error) {
      alert('Error al agregar al carrito');
      console.error(error);
    }
  };

  
  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== itemId));
  };

  
  const clear = () => setCart([]);

  
  const isInCart = (id) => cart.some(prod => prod.id === id);


  const getItemTotal = (id) => {
    const prod = cart.find(p => p.id === id);
    return prod ? prod.price * prod.quantity : 0;
  };

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems, getItemTotal }}>
      {children}
    </CartContext.Provider>
  );
};