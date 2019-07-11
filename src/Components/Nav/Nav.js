import React, {useState} from 'react';
import '../Nav/Nav.scss';
import { slideInLeft } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import Logo from '../Assets/Images/logo.png';

function Nav() {
    // state to open/close nav
    const [navOpen, setNavOpen] = useState({
        open: false
    })
    // open
    const openNav = () => {
        setNavOpen({ open: true });
    }
    // close
    const closeNav = () => {
        setNavOpen({ open: false });
    }
    // animate navbar
    const styles = {
        slideIn: {
            animation: 'x 1s',
            animationName: Radium.keyframes(slideInLeft, 'slideIn')
        }
    }

    return (
        <div className="Nav">
            {!navOpen.open ? <>
                <i className="fas fa-bars NavIcon" onClick={openNav}></i></> : <><i className="far fa-window-close NavIcon" onClick={closeNav}></i></>}
            {navOpen.open ? <StyleRoot>
                <nav className="Navbar" style={styles.slideIn}>
                    <img src={Logo} alt="Logo" class="NavLogo" />
                    <ul>
                        <li>Explore</li>
                        <li>Chats</li>
                        <li>Match</li>
                        <li>Feed</li>
                        <li>Profile</li>
                    </ul>
                </nav>
            </StyleRoot> : null}
        </div>
    );
}

export default Nav;
