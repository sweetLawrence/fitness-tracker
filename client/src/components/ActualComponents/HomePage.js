import React, { useState } from 'react'
import filler from '../../ImagesFolder/homebg.avif'
import Signup from '../AuthenticationFolder/Signup'
import Login from '../AuthenticationFolder/Login'
import Navbar from './Navbar'

const HomePage = () => {
    const [buttonState, setButtonState] = useState("signup");
    function handleSignup() {
        setButtonState("signup")
    }
    function handleLogin() {
        setButtonState("login")
    }
    return (
        <div className="main-h-page">
              <Navbar />
            <div className='homepage animate__animated animate__fadeInUp'>
              
                <div className="div1">
                   
                 Welcome to <span> Genie</span>
                </div>
                <div className="div2">
                    <div className="select-login-type">
                        <button onClick={handleSignup}>Signup</button>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    {(buttonState == "signup") && (
                        <div className='home-s animate__animated animate__fadeIn'>
                            <Signup />
                        </div>

                    )}
                    {(buttonState == "login") && (
                        <div className='home-l animate__animated animate__fadeIn'>
                            <Login />
                        </div>

                    )}

                </div>
            </div>
        </div>

    )
}

export default HomePage