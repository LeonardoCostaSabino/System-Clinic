import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
// import '../public/favicon.ico';

const bootstrap = require('bootstrap')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
