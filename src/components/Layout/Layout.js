import React from 'react'
import { connect } from 'react-redux'
import { routes } from '../../routing'
import { userInit } from '../../actions/userActions'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../../store'

import '../../../node_modules/normalize.css/normalize.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'

import './Layout.css'
import logo from './logo.svg';

const history = syncHistoryWithStore(browserHistory, store)

class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(userInit())
    }
    
    render() {
       if ( this.props.initialized ) {
            return (
                <div className="layout">
                    <Router history={history} routes={routes}/>
                </div>
            )
        }
        return (
            <div className="layout layout--init">
                <div className="layout--center">
                    <img src={logo} className="layout--center--logo" alt="logo" />
                </div>
            </div>
        )
  }
}

Layout = connect((store) => {
    return {
        initialized: store.user.initialized
    }
})(Layout)

export default Layout;