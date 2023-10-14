import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../ImagesFolder/fitness1.png';
import { AuthContext } from '../../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar2 = () => {
    const { authState, setAuthState } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const isLoggedIn = !!authState;

    const [isVerticalNavVisible, setVerticalNavVisibility] = useState(false);

    const handleLogout = ({ toggleVerticalNav }) => {
        setAuthState(false); // Set authentication state to false
        navigate('/'); // Navigate to the homepage
        // window.location.reload(); // Reload the page
        localStorage.removeItem("accessToken");
    };
    const toggleVerticalNav = () => {
        setVerticalNavVisibility((prevVisibility) => !prevVisibility);
    };

    return (
        <div className="navbar2 navbar">
            <div className="up-logo">
                <img src={logo} className="logo" alt="homepage_logo" />
                <span>Genie</span>

            </div>

            <ul>
                {!isLoggedIn && (
                    <>
                        <Link className={`analytics ${location.pathname === '/analytics' ? 'active' : ''}`} to="/analytics">
                            <li className="row">Analytics</li>
                        </Link>
                        {/* 
            <Link className={`analytics ${location.pathname === '/' ? 'active' : ''}`} to="/">
              <li className="row">Summaryzz</li>
            </Link> */}

                        <Link

                            className={`analytics ${location.pathname === '/summary' ? 'active' : ''}`}
                            to="/summary"
                        >
                            <li className="row">Summary</li>
                        </Link>

                        <Link
                            onClick={handleLogout}
                            className={`analytics ${location.pathname === '/' ? 'active' : ''}`}
                            to="/"
                        >
                            <li className="row">Logout</li>
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



                        <Link
                            onClick={handleLogout}
                            className={`analytics ${location.pathname === '/' ? 'active' : ''}`}
                            to="/"
                        >
                            <li className="row">Logout</li>
                        </Link>

                        <Link

                            className={`analytics ${location.pathname === '/summary' ? 'active' : ''}`}
                            to="/summary"
                        >
                            <li className="row">Summary</li>
                        </Link>


                        {/* <Link
              className={`analytics ${location.pathname === '/analytics' ? 'active' : ''}`}
              to="/analytics"
            >
              <li className="row">Summary</li>
            </Link> */}
                    </>
                )}
                {/* <Link
                    className={`analytics ${location.pathname === '/summary' ? 'active' : ''}`}
                    to="/summary"
                >
                    <li className="row">Summary</li>
                </Link> */}

                <div className="bars" onClick={toggleVerticalNav}>
                    <MoreVertIcon />
                    {
                        isVerticalNavVisible && (
                            <div className="d">
                                <ul>
                                    {/* <span>X</span> */}

                                    <Link to="/analytics">
                                        <li className="row">Analytics</li>
                                    </Link>

                                    <Link
                                        onClick={handleLogout}
                                        to="/"
                                    >
                                        <li className="row">Logout</li>
                                    </Link>
                                    <Link
                                        className={`analytics`}
                                        to="/summary"
                                    >
                                        <li className="row">Summary</li>
                                    </Link>

                                    {/*                                   
                                    <li className="row">Analytics</li>
                                    <li className="row">Summary</li> */}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </ul>



        </div>
    );
};

export default Navbar2;
