import '../css/CartWidget.css'

const CartWidget = ({ cantidad = 0 }) => {
    return (
        <div className="cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cantidad}</span>
        </div>
    );
};

export default CartWidget; 