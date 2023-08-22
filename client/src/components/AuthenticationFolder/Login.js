import React, { useState,useContext } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../helpers/AuthContext"

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthState} = useContext(AuthContext);

    const navigate = useNavigate();

    function handleSubmit() {
        // e.preventDefault()
        //setName(""); // this could spell disaster if by chance setState updates immediately rather clear after sending
        //setPassword("");

        const data = {
            username: name,
            password: password
        };
        console.log("Sending data to the server:", data);

        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            console.log("Response from server:", response.data);
            if (response.data.error) {
                alert(response.data.error);
            }
            else {
                localStorage.setItem("accessToken", response.data);
                // console.log(response.data)
                console.log("Login successful. Access token:", response.data);
                // clear up now
                setName(""); 
                setPassword("");
                setAuthState(true)
                navigate("/analytics");
            };
        });



    }
    return (
        <div className={"home-l animate__animated animate__fadeIn"}>
            <div className='login-signup target-box'>
                <h3>Login</h3>
                <div className="input-z achieved">
                    <input type="text"
                        placeholder='Enter username'
                        required className='t-achieved'
                        value={name}
                        onChange={(e) => (
                            setName(e.target.value)
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
        </div>
    )
}

export default Login
