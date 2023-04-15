import React from 'react';
import axios from 'axios';
import './index.css';

const Login = (props) => {



    const makeLogin = async (evt) => {
        if (evt && evt.preventDefault) {
            evt.preventDefault()
        }

        const formData = new FormData(evt.target);

        const data = {}
        for (const [key, value] of formData) {
            // console.log(key, value)
            data[key] = value;
        }
        if (data) {
            
                const result = await axios.post("http://localhost:3001/login", data);
                console.log(result)
                if (result) {
                    window.location.href = "/"
                }
                return true;
            
            
        }

    }
return (
    <div className="login-page">
        <div className="form">
            <form className="login-form" onSubmit={makeLogin}>
                <input type="text" placeholder="username"name='email' />
                <input type="password" placeholder="password"name='password' />
                <div id="error">
                    <p></p>
                </div>
                <button type='submit'>login</button>
                <p className="message">Not registered? <a href="http://localhost:3000">Create an account</a></p>
            </form>
        </div>
    </div>
)
}

export default Login;