import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './loginPage.css';

const style = {
  margin: 12,
};

class LoginPage extends Component {
    constructor(props){
        super(props);
        
    }
    login(list) {
        console.log(list);
    }
    handleClick(e) {
        this.login("element is clicked");
    }
    componentDidMount() {
        this.login("it is form component did mount")
    }
    render() {
        return (
            <form className="container">
                <div className="login-container">
                    <h4 style={{ color: '#616161'}}> Login Page  </h4>
                    <TextField
                    hintText="Username"
                    /><br /><br />
                    <TextField 
                    hintText="Password"
                    type="password"
                    /><br /><br />
                    <RaisedButton label="Login" onClick={this.handleClick.bind(this)} primary={true} style={style} />
                </div>
            </form>
            
        );
    }
}

export default LoginPage;
