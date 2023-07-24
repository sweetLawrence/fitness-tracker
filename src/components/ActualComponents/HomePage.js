import React, { useState } from 'react'
import filler from '../../ImagesFolder/homebg.avif'
import Signup from '../AuthenticationFolder/Signup'
import Login from '../AuthenticationFolder/Login'

const HomePage = () => {
    const [buttonState, setButtonState] = useState("signup");
    function handleSignup() {
        setButtonState("signup")
    }
    function handleLogin() {
        setButtonState("login")
    }
    return (
        <div className='homepage'>
            <div className="div1">
                Welcome to <span>FitrApp</span>
            </div>
            <div className="div2">
                <div className="select-login-type">
                    <button onClick={handleSignup}>Signup</button>
                    <button onClick={handleLogin}>Login</button>
                </div>
                {(buttonState == "signup") && (
                    <div className='animate__animated animate__fadeIn'>
                        <Signup />
                    </div>

                )}
                {(buttonState == "login") && (
                    <div className='animate__animated animate__fadeIn'>
                        <Login />
                    </div>

                )}

            </div>
        </div>
    )
}

export default HomePage