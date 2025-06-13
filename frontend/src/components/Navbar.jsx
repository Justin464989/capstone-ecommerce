import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">🛍️ E-Shop</NavLink>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/admin-login" className="nav-item">Admin</NavLink>
        <NavLink to="/products" className="nav-item">Products</NavLink>
        <NavLink to="/cart" className="nav-item">
          Cart <span className="badge">{cart.length}</span>
        </NavLink>
        <NavLink to="/create-listing" className="nav-item">Create Listing</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
