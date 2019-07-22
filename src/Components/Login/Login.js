import React, {useState} from 'react';
import '../Login/Login.scss';
import World from '../Assets/Images/header.png';
import Logo from '../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

// Login / Create account page
function Login() {
    // modal state
    const [isOpen, setIsOpen] = useState({
        open: false
    });
    const show = () => {
        setIsOpen({ ...isOpen, open: true });
    }

    const hide = () => {
        setIsOpen({ ...isOpen, open: false });
    }
    // animate login modal
    const styles = {
        fadeIn: {
            animation: 'x 0.5s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    }

    return (
        <div className="Login">
            {/* header */}
            <div className="LoginHeader">
                {/* logo */}
                <img src={Logo} alt="Geolingo logo" className="Logo" />
                <h1>Welcome to Geolingo!</h1>
                <h2>Make friends all around the globe while practicing the language you love!</h2>
            </div>
            {/* buttons */}
            <div className="LoginButtonsWrapper">
                <div className="LoginButtons"> 
                    <Link to="/create-account/">
                      <button id="CreateAccount">create account</button>
                    </Link>
                    <button id="LogIn" onClick={show}>log in</button>
                </div>
            </div>
            {/* modal login */}
            {isOpen.open ? <div className="LoginModalWrapper">
                <div className="Overlay" onClick={hide}></div>
                <StyleRoot>
                <div className="LoginModal" style={styles.fadeIn}>
                    <i className="far fa-window-close LoginClose" onClick={hide}></i>
                    <div className="LogInFields">
                        {/* logo */}
                        <img src={Logo} alt="world header" className="LoginLogo" />
                        <input type="text" name="username" placeholder="Username..." />
                        <input type="password" name="password" placeholder="Password..." />
                    </div>
                    <div className="LoginBtnModalWrapper">
                        <button className="LoginBtnModal">Log In</button> 
                    </div>
                </div>
                </StyleRoot>
            </div> : null}
            {/* graphic, world */}
            <img src={World} alt="world-header" id="LoginImage" />
        </div>
    );
}

export default Login;