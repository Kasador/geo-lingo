import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../Components/Login/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/sign-in/" component={Login} />
            </Router>
        </div>
    );
}

export default App;