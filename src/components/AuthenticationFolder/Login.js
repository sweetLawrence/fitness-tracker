import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(){
        // e.preventDefault()
        setEmail("");
        setPassword("");
       
    }
    return (
        <div className='login-signup target-box'>
          
            <h3>Login</h3>
            <div className="input-z achieved">
                <input type="email"
                    placeholder='Enter Email'
                    required className='t-achieved'
                    value={email}
                    onChange={(e) => (
                        setEmail(e.target.value)
                    )}
                />
            </div>
            <div className="input-z time-taken">
                <input type="password"
                    placeholder='Enter Password'
                    required className='t-time-taken'
                    value={password}
                    onChange={(e) => (
                        setPassword(e.target.value)
                    )}
                />
            </div>
            <div className="btn">

                <button type='submit'
                onClick={handleSubmit}
                >Login</button>

            </div>

        </div>
    )
}

export default Login