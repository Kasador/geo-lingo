import React from 'react';
import '../Main/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from '../Components/SignIn/SignIn';

function App() {
    return (
        <div className="App">

            
            <Router>
                
                <Link to="/sign-in/">Sign In</Link> {/* temporary sign in button, Link will probably have to be used in Steven's Login component page */}
                <Route path="/sign-in/" component={SignIn} />
            </Router>
        </div>
    );
}

export default App;