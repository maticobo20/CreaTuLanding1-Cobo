import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { db } from '../service/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import '../css/Checkout.css';


const Checkout = ({ closeCheckout }) => {
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
    secondEmail: ''
  });
  const { cart, clear, totalItems } = useCart();

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const [orderId, setOrderId] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (cart.length === 0) {
      setErrorMsg('El carrito está vacío. Agrega productos antes de finalizar la compra.');
      return;
    }
    if (!buyer.name || !buyer.phone || !buyer.email || !buyer.secondEmail) {
      setErrorMsg('Completa todos los campos');
      return;
    }
    if (buyer.email !== buyer.secondEmail) {
      setErrorMsg('Los emails no coinciden');
      return;
    }

    let order = {
      comprador: buyer,
      compras: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: serverTimestamp()
    };
    const ventas = collection(db, 'orders');
    addDoc(ventas, order)
      .then(res => {
  setOrderId(res.id);
  clear();
      })
      .catch(error => {
        setErrorMsg('Error al enviar la orden');
      });
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="order-success">
          <h2>¡Realizaste tu compra correctamente! 🎉🙌</h2>
          <h3>El id de la compra: <span className="order-id">{orderId}</span></h3>
          <Link to="/" className="checkout-home-btn">Volver al inicio</Link>
        </div>
      ) : (
        <>
          <h1>Complete el formulario con sus datos</h1>
          {errorMsg && (
            <div className="checkout-error">{errorMsg}</div>
          )}
          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              placeholder="Nombre"
              name="name"
              className="form-control"
              type="text"
              value={buyer.name}
              onChange={buyerData}
              required
            />
            <input
              placeholder="Teléfono"
              name="phone"
              className="form-control"
              type="number"
              value={buyer.phone}
              onChange={buyerData}
              required
            />
            <input
              placeholder="Email"
              name="email"
              className="form-control"
              type="email"
              value={buyer.email}
              onChange={buyerData}
              required
            />
            <input
              placeholder="Repetir Email"
              name="secondEmail"
              className="form-control"
              type="email"
              value={buyer.secondEmail}
              onChange={buyerData}
              required
            />
            <button className="btn btn-dark" type="submit">Completar compra</button>
          </form>
          <div className="checkout-cart-info">
            <h3>Resumen del carrito</h3>
            {cart.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    {item.name ? item.name : item.title} x {item.quantity}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
