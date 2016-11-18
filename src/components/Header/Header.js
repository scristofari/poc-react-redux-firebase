import React from 'react';
import Menu from '../Menu/Menu'
import UserLogin from '../UserLogin/UserLogin'

import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header--left">
            <Menu />
        </div>
        <div className="Header--right">
            <UserLogin />
        </div>
      </div>
    );
  }
}

export default Header;