import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Nav from '../Components/Nav/Nav';
import CreateAccount from '../Components/CreateAccount/CreateAccount';
import { AnimatedSwitch } from 'react-router-transition';

function App() {
    return (
        <div className="App">
            <Router>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}>

                    <Route exact path="/" component={Nav} />
                    <Route exact path="/sign-in/" component={Login} />
                    <Route exact path="/create-account/" component={CreateAccount} />
                </AnimatedSwitch>
            </Router>
        </div>
    );
}

export default App;