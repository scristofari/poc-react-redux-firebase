import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { toggleMenu } from '../../actions/menuActions'

import './Menu.css'

class Menu extends React.Component {
  toggleMenu(e) {
    this.props.dispatch(toggleMenu())
  }

  render() {
    if ( this.props.isOpen === false ) {
      return (
        <div className='Menu'>
          <div className="fa fa-bars" onClick={this.toggleMenu.bind(this)}></div>
        </div>
      );
    }
    return (
      <div className='Menu'>
        <div className="fa fa-bars" onClick={this.toggleMenu.bind(this)}></div>
        <div className="Menu--list">
          <div className="Menu--list--close fa fa-close" onClick={this.toggleMenu.bind(this)}></div>
          <Link to={`/`}>Home</Link>
          <Link to={`/about`}>About</Link>
        </div>
        <div className="Menu--shadow" onClick={this.toggleMenu.bind(this)}></div>
      </div>
    );
  }
}

Menu = connect((store) => {
    return {
        isOpen: store.menu.isOpen,
    }
})(Menu)

export default Menu;