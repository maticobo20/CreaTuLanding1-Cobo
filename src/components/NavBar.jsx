import CartWidget from './CartWidget';
import './css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img 
                    src="/melek.png" 
                    alt="Logo Melek" 
                    className="logo-image"
                />
                <h1 className="logo-title">MËLEꓘ</h1>
            </div>
            
            <div className="nav-menu">
                <button className="nav-button">
                    Inicio
                </button>
                
                <button className="nav-button">
                    Productos
                </button>
                
                <button className="nav-button">
                    Contacto
                </button>
                
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
