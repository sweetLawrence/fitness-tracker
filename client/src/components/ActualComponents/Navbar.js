import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../ImagesFolder/fitness1.png';
import { AuthContext } from '../../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!authState;

  return (
    <div className="navbar">
      <div className="up-logo">
        <img src={logo} className="logo" alt="homepage_logo" />
        <span>Genie</span>
      </div>

      <ul>
        {!isLoggedIn && (
          <>
            <Link className={`analytics ${location.pathname === '/' ? 'active' : ''}`} to="/">
              <li className="row">Home</li>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link
              className={`analytics ${location.pathname === '/analytics' ? 'active' : ''}`}
              to="/analytics"
            >
              <li className="row">Analytics</li>
            </Link>
          </>
        )}
        {/* <Link
          className={`analytics ${location.pathname === '/summary' ? 'active' : ''}`}
          to="/summary"
        >
          <li className="row">Summary</li>
        </Link> */}

      </ul>
    </div>
  );
};

export default Navbar;
