import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { createOrder } from '../service/createOrder';
import '../css/Cart.css';

const Cart = () => {
  const { cart, removeItem, clear, getItemTotal } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [orderId, setOrderId] = useState(null);

  const handleFinishPurchase = async () => {
    const buyer = { name: 'Nombre', phone: '123456789', email: 'email@email.com' };
    const items = cart.map(item => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity,
      price: item.price
    }));
    const orderData = {
      buyer,
      items,
      date: new Date(),
      total
    };
    try {
      const id = await createOrder(orderData);
      setOrderId(id);
      clear();
    } catch (error) {
      alert('Error al crear la orden');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="cart-back-btn">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {orderId ? (
        <div className="order-success">
          <h3>¡Compra realizada con éxito!</h3>
          <p>Tu código de orden es: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-qty">x{item.quantity}</span>
                <span className="cart-item-price">${item.price}</span>
                <span className="cart-item-total">Total: ${getItemTotal(item.id)}</span>
                <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${total}</strong>
          </div>
          <button className="cart-clear-btn" onClick={clear}>Vaciar carrito</button>
          <button className="cart-finish-btn" onClick={handleFinishPurchase}>Finalizar compra</button>
        </>
      )}
    </div>
  );
};

export default Cart;
