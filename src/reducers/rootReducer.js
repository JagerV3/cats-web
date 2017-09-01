import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import user from './userReducers.js';

const catsReducer = combineReducers({ 
    user: user,
    route: routerReducer
})
export default catsReducer;