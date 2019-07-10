import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../Components/SignIn/SignIn';
import Login from '../Components/Login/Login';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Login and Sign-in routes*/}
                <Route path="/" exact component={Login}/> {/* For now putting the login on the root path */}
                <Route path="/sign-in/" component={SignIn} />
            </div>
        </Router>
    );
}

export default App;