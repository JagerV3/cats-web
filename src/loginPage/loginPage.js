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
        this.state = {
           username: '',
           usernameErrorText : '',
           password: '',
           passwordErrorText : '',
           isDisabled : true
        }
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
    validateUsername = (e, val) => { 
        if(val === '') {
            this.setState({ usernameErrorText: 'Username cant be blank', isDisabled: true})
        }
        else this.setState({ usernameErrorText: '', isDisabled: false})
    }
    validatePassword = (e, val) => { 
        if(val === '') this.setState({ passwordErrorText: 'Password cant be blank', isDisabled: true}) 
        else this.setState({ passwordErrorText: '', isDisabled: false})
    }

    render() {
        return (
            <form className="container">
                <div className="login-container">
                    <h4 style={{ color: '#616161'}}> Login Page  </h4>
                    <TextField
                        hintText="Username"
                        onChange= {this.validateUsername}
                        errorText= {this.state.usernameErrorText}/><br /><br />
                    <TextField 
                        hintText="Password"
                        type="password"
                        onChange= {this.validatePassword}
                        errorText= {this.state.passwordErrorText} /><br /><br />
                    <RaisedButton 
                        disabled={this.state.isDisabled}
                        label="Login" 
                        onClick={this.handleClick.bind(this)} 
                        primary={true} 
                        style={style} />
                </div>
            </form>
            
        );
    }
}

export default LoginPage;
