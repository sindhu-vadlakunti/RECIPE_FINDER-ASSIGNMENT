import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ favorites = [] }) => {
  const location = useLocation();
  const favoritesCount = favorites.length;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#d63384' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-utensils me-2"></i>Recipe Finder
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''}`} 
                to="/"
              >
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/favorites' ? 'active fw-bold' : ''}`} 
                to="/favorites"
              >
                <i className="fas fa-heart me-1"></i> Favorites
                {favoritesCount > 0 && (
                  <span className="position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-danger">
                      {favoritesCount}
                      <span className="visually-hidden">favorites</span>
                    </span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
