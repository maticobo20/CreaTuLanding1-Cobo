import CartWidget from './CartWidget';
import '../css/NavBar.css';

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
                
                <div className="categories-dropdown">
                    <a className="nav-button">Productos</a>
                    <div className="dropdown-content">
                        <a className="dropdown-item">Todos</a>
                        <a className="dropdown-item">Remeras</a>
                        <a className="dropdown-item">Accesorios</a>
                        <a className="dropdown-item">Pantalones</a>
                        <a className="dropdown-item">Camperas</a>
                    </div>
                </div>
                
                <a className="nav-button">Contacto</a>
                
                <CartWidget cantidad={0} />
            </div>
        </nav>
    );
};

export default NavBar;
