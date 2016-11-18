import React from 'react'
import Editor from '../Editor/Editor'

import Header from '../Header/Header'
import logo from './logo.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Home-intro">
          <Editor />
        </div>
      </div>
    );
  }
}

export default Home;
