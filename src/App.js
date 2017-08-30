import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './homePage/homePage.js';
import LoginPage from './loginPage/loginPage.js';
import RegisterPage from './registerPage/registerPage.js';
import UserPage from './userPage/userPage.js';
import SideBar from './controls/sideBar.js';
import './App.css';

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

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
            <div>
                <SideBar items={items} />
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/user" component={UserPage} />
            </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
