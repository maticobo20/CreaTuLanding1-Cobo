import './css/ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="item-list-container">
            <h1 className="greeting-title">
                {mensaje}
            </h1>
            
            <div className="products-grid">
                <div className="product-card">
                    <img 
                        src="/human.png" 
                        alt="Remera Human" 
                        className="product-image"
                    />
                    <h3 className="product-title">Remera Human Made</h3>
                    <p className="product-description">Remera oversize <br/> 100% algodón <br/> Colores: Blanco y Negro</p>
                </div>
                
                <div className="product-card">
                    <img 
                        src="/11.png" 
                        alt="Remera 11" 
                        className="product-image"
                    />
                    <h3 className="product-title">Remera 11:11</h3>
                    <p className="product-description">Remera oversize <br/> 100% algodón <br/> Colores: Blanco y Negro</p>
                </div>
                
                <div className="product-card">
                    <img 
                        src="/pantera.png" 
                        alt="Remera Pantera" 
                        className="product-image"
                    />
                    <h3 className="product-title">Remera Born Wild</h3>
                    <p className="product-description">Remera oversize <br /> 100% algodón <br /> Colores: Blanco y Negro</p>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer; 