import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cartService from '../../services/cartService';

const Navbar = ({ user }) => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const cart = cartService.get();
    setCartLength(cart.length);
  },[]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Larashop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/product">Product</NavLink>
          </div>
          {user && 
          <React.Fragment>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">{user.name}</NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </div>
          </React.Fragment>}
          {!user && 
          <React.Fragment>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </div>
          </React.Fragment>}
        </div>
        <div className="collapse navbar-collapse float-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link> {cartLength}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;