import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'; 
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import HomePage from './homePage/homePage.js';
import LoginPage from './loginPage/loginPage.js';
import App from './App.js';

const routes = (
  <Route path="/" component={App}>
    <Route path="home" component={HomePage} />    
    <Route path="login" component={LoginPage} />
  </Route>
)
 
export default routes;