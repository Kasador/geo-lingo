import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Nav from '../Components/Nav/Nav';
import CreateAccount from '../Components/CreateAccount/CreateAccount';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={Nav} />
                <Route exact path="/sign-in/" component={Login} />
                <Route exact path="/create-account/" component={CreateAccount} />
            </Router>
        </div>
    );
}

export default App;