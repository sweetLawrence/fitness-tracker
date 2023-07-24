import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit() {
        // e.preventDefault()
        setEmail("");
        setPassword("");
        setName("");

    }

    return (
        <div className='login-signup target-box'>
            <h3>Signup</h3>
            <div className=" input-z target-input">
                <input type="text" placeholder='Enter Username' required className='t-input'
                    value={name}
                    onChange={(e) => (
                        setName(e.target.value)
                    )}
                />
            </div>
            <div className="input-z achieved">
                <input type="email" placeholder='Enter Email' required className='t-achieved'
                    value={email}
                    onChange={(e) => (
                        setEmail(e.target.value)
                    )}
                />
            </div>
            <div className="input-z time-taken">
                <input type="password" placeholder='Enter Password' required className='t-time-taken'
                    value={password}
                    onChange={(e) => (
                        setPassword(e.target.value)
                    )}
                />
            </div>
            <div className="btn">

                <button type='submit'
                    onClick={handleSubmit}
                >Signup</button>

            </div>
        </div>
    )
}

export default Signup