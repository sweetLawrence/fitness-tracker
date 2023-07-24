import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from "../../ImagesFolder/fitness1.png"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt="homepage_logo" />
            <ul>
                <Link
                    className={`analytics ${location.pathname === '/' ? 'active' : ''}`}
                    to="/"
                >
                    <li className='row'>Home</li>
                </Link>

                <Link
                    className={`analytics ${location.pathname === '/analytics' ? 'active' : ''}`}
                    to="/analytics"
                >
                    <li className='row'>Analytics</li>
                </Link>

                <Link
                    className={`analytics ${location.pathname === '/summary' ? 'active' : ''}`}
                    to="/summary"
                >
                    <li className='row'>Summary</li>
                </Link>
            </ul>
        </div >
    )
}

export default Navbar