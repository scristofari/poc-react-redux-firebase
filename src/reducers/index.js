import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './userReducer'
import menu from './menuReducer'

export default combineReducers({
    user,
    menu,
    routing: routerReducer
});