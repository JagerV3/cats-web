import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './registerPage.css';

const responseGoogle = (response) => {
    console.log(response);
    var user = response.profileObj;
    console.log(user);
}


const style = {
  margin: 12,
};
class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Facebook Login'
        }
    }
    
    componentDidMount() {
        console.log("it is from component did mount");
    }
    render() {
        return (
            <form className="container">
                <div className="register-container">
                <GoogleLogin
                    clientId="256005499286-rdpukopgue9ri52nf3tj3fhperlo56rb.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                    {/* <h4 style={{ color: '#616161'}}> Register Page  </h4>
                    <TextField
                    hintText="Email"
                    /><br /><br />
                    <TextField
                    hintText="Username"
                    /><br /><br />
                    <TextField 
                    hintText="Password"
                    type="password"
                    /><br /><br />
                    <RaisedButton label="Register" onClick={this.handleClick.bind(this)} primary={true} style={style} /> */}
                </div>
            </form>
            
        );
    }
}

RegisterPage.defaultProps = {
    name: 'Instagram Login'
};

export default RegisterPage;
