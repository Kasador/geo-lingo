import React from 'react';
import '../Login/Login.scss';
import { Link } from 'react-router-dom';

// Login / Create account page
function Login() {
    return (
        <div className="Login">
            {/* header */}
            <Link to="/sign-in/">Sign In</Link>
            <h1>Welcome to Geolingo!</h1>
            <h2>Make friends all around the globe.</h2>
        </div>
    );
}

export default Login;