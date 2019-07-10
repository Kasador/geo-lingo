import React from 'react';
import '../Main/App.scss';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../Components/SignIn/SignIn';
=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
>>>>>>> 5c8a62551ab9e9fed5545d86c4c6b31e7f77feaf
import Login from '../Components/Login/Login';

function App() {
    return (
<<<<<<< HEAD
        <Router>
            <div className="App">
                {/* Login and Sign-in routes*/}
                <Route path="/" exact component={Login}/> {/* For now putting the login on the root path */}
                <Route path="/sign-in/" component={SignIn} />
            </div>
        </Router>
=======
        <div className="App">
            <Router>
                <Login />
                <Link to="/sign-in/">Sign In</Link> {/* temporary sign in button, Link will probably have to be used in Steven's Login component page */}
                <Route path="/sign-in/" component={Login} />
            </Router>
        </div>
>>>>>>> 5c8a62551ab9e9fed5545d86c4c6b31e7f77feaf
    );
}

export default App;