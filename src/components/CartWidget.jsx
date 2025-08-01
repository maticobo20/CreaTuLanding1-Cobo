import { useState } from 'react';
import './css/CartWidget.css';

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0);

    const sumarProducto = () => {
        setCartCount(cartCount + 1);
    };

    const restarProducto = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        }
    };

    return (
        <div className="cart-widget">
            <button 
                className="cart-button" 
                onClick={restarProducto}
                disabled={cartCount === 0}
            >
                -
            </button>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Carrito ({cartCount})</span>
            <button 
                className="cart-button" 
                onClick={sumarProducto}
            >
                +
            </button>
        </div>
    );
};

export default CartWidget; 