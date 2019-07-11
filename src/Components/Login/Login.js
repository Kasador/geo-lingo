import React from 'react';
import '../Login/Login.scss';
import World from '../Assets/Images/header.png';
import Logo from '../Assets/Images/logo.png';

// Login / Create account page
function Login() {
    return (
        <div className="Login">
            {/* header */}
            <div className="LoginHeader">
                <img src={Logo} alt="Geolingo logo" className="Logo" />
                <h1>Welcome to Geolingo!</h1>
                <h2>Make friends all around the globe while practicing the language you love!</h2>
            </div>
            {/* buttons */}
            <div className="LoginButtonsWrapper">
                <div className="LoginButtons">
                    <button id="CreateAccount">create account</button>
                    <button id="LogIn">log in</button>
                </div>
            </div>
            {/* graphic, world */}
            <img src={World} alt="world header image" id="LoginImage" />
        </div>
    );
}

export default Login;