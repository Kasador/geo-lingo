import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Nav from '../Components/Nav/Nav';

function App() {
    return (
        <div className="App">
            <Nav />
            <Router>
                <Route exact path="/sign-in/" component={Login} />
            </Router>
        </div>
    );
}

export default App;