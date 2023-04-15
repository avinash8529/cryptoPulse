import axios from 'axios';
import React from 'react';
import './index.css';

const Registration = () => {

    const makeRegistration = async (evt) => {
        if (evt && evt.preventDefault) {
            evt.preventDefault()
        }

        const formData = new FormData(evt.target);

        const data = {}
        for (const [key, value] of formData) {
            console.log(key, value)
            data[key] = value;
        }
        if (data) {
            if (data.password === data.confirmPassword) {
                delete data.confirmPassword;
                const result = await axios.post("http://localhost:3001/registration", data);
                if (result) {
                    window.location.href = "/login"
                }
                return true;
            }
            return true;
        }



    }
    return (
        <>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={makeRegistration}>
                        <input type="text" placeholder="name" name="name"  required/>
                        <input type="text" placeholder="username" name="userName" required />
                        <input type="text" placeholder="Email" name="email" required/>
                        <input type="password" placeholder="password" name="password"  required/>
                        <input type="password" placeholder="confirm Password" name="confirmPassword"  required/>
                        <div className="error">{ } </div>
                        <button type='submit'>signup</button>
                        <p className="message">If registered? <a href="http://localhost:3000/login">Go to Login</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Registration;