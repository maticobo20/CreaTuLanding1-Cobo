import './css/ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="item-list-container">
            <h1 className="greeting-title">
                {mensaje}
            </h1>
            
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-icon">👕</div>
                    <h3 className="product-title">Remeras</h3>
                    <p className="product-description">Remeras de todos los colores y talles</p>
                </div>
                
                <div className="product-card">
                    <div className="product-icon">👖</div>
                    <h3 className="product-title">Pantalones</h3>
                    <p className="product-description">Jeans, joggers y pantalones casuales</p>
                </div>
                
                <div className="product-card">
                    <div className="product-icon">🧥</div>
                    <h3 className="product-title">Buzos</h3>
                    <p className="product-description">Buzos con capucha y sin capucha</p>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer; 