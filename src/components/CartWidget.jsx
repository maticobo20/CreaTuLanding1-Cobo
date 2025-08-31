import '../css/CartWidget.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalItems } = useCart();
    if (!totalItems || totalItems === 0) return null;
    return (
        <Link to="/cart" className="cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
        </Link>
    );
};

export default CartWidget;