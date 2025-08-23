import CartWidget from './CartWidget';
import '../css/NavBar.css';
import { NavLink } from 'react-router-dom';


import { useState } from 'react';

const NavBar = ({cantidad}) => {
    const [showDropdown, setShowDropdown] = useState(false);

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
                    <button className="nav-button" type="button">Productos</button>
                    <div className="dropdown-content">
                        <NavLink to="/productos" className="dropdown-item">Todos</NavLink>
                        <NavLink to="/categoria/remeras" className="dropdown-item">Remeras</NavLink>
                        <NavLink to="/categoria/buzos" className="dropdown-item">Buzos</NavLink>
                        <NavLink to="/categoria/pantalones" className="dropdown-item">Pantalones</NavLink>
                        <NavLink to="/categoria/camperas" className="dropdown-item">Camperas</NavLink>
                    </div>
                </div>
                <NavLink to="/contacto" className="nav-button">Contacto</NavLink>
                <CartWidget cantidad={cantidad} />
            </div>
        </nav>
    );
};

export default NavBar;
