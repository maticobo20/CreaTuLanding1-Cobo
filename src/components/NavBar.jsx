import CartWidget from './CartWidget';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { totalItems } = useCart();

    const handleDropdown = (e) => {
        e.preventDefault();
        setShowDropdown((prev) => !prev);
    };

    const closeDropdown = () => setShowDropdown(false);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <NavLink to="/">
                    <img 
                        src="/melek.png" 
                        alt="Logo Melek" 
                        className="logo-image"
                    />
                </NavLink>
                <h1 className="logo-title">MËLEꓘ</h1>
            </div>
            <div className="nav-menu">
                <NavLink to="/" className="nav-button">Inicio</NavLink>
                <div className="categories-dropdown">
                    <span className="nav-button" tabIndex={0}>Productos</span>
                    <div className="dropdown-content">
                        <NavLink to="/productos" className="dropdown-item">Todos</NavLink>
                        <NavLink to="/category/remeras" className="dropdown-item">Remeras</NavLink>
                        <NavLink to="/category/buzos" className="dropdown-item">Buzos</NavLink>
                        <NavLink to="/category/pantalones" className="dropdown-item">Pantalones</NavLink>
                        <NavLink to="/category/camperas" className="dropdown-item">Camperas</NavLink>
                    </div>
                </div>
                <NavLink to="/contacto" className="nav-button">Contacto</NavLink>
                <CartWidget cantidad={totalItems} />
            </div>
        </nav>
    );
};

export default NavBar;
