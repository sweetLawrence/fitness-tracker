import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function handleSubmit() {
        // e.preventDefault()
        setEmail("");
        setPassword("");
        setName("");

        const data = {
            username: name,
            password: password,
        }

        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
            alert("You will be redirected to login page. Use the details you have filled to login")
            // why not automatically log them in from the server?
            navigate("/login");
        });
        

    }

    return (
        <div className="home-s animate__animated animate__fadeIn" >
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
                {/* <div className="input-z achieved">
                    <input type="email" placeholder='Enter Email' required className='t-achieved'
                        value={email}
                        onChange={(e) => (
                            setEmail(e.target.value)
                        )}
                    />
                </div> */}
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
        </div>
    )
}

export default Signup
