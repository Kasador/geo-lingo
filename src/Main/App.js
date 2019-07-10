import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../Components/Login/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Login />
                <Link to="/sign-in/">Sign In</Link> {/* temporary sign in button, Link will probably have to be used in Steven's Login component page */}
                <Route path="/sign-in/" component={Login} />
            </Router>
        </div>
    );
}

export default App;