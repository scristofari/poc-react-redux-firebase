import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './modules/Home/Home';
import About from './modules/About/About';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </Router>
  , document.getElementById('root')
)