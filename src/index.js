import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.scss';
import './Components/Assets/colors.scss';
import App from './Main/App';

const destination = document.querySelector('#root');

ReactDOM.render(<App />, destination);