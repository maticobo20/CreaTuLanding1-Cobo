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
                <a className="nav-button">Inicio</a>
                
                <a className="nav-button">Productos</a>
                
                <a className="nav-button">Contacto</a>
                
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
