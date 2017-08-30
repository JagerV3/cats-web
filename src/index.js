import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from './homePage/homePage.js';
import LoginPage from './loginPage/loginPage.js';
import RegisterPage from './registerPage/registerPage.js';
import App from './App';
import SideBar from './controls/sideBar.js';
import './index.css';

const items = [
    {
        name: 'Login Page',
        path: '/login'
    },
    {
        name: 'Register Page',
        path: '/register'
    },
    {
        name: 'Dashboard',
        path: '/login'
    },
    {
        name: 'Task',
        path: '/register'
    },
    {
        name: 'Team',
        path: '/register'
    },
    {
        name: 'Project',
        path: '/register'
    }
];
ReactDOM.render(
    <Router>
        <MuiThemeProvider>
            <div>
                <SideBar items={items} />
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/app" component={App} />
            </div>
        </MuiThemeProvider>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
