import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './registerPage.css';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorText: '',
            isAuthienticate: false,
            token :'',
            isSignedUp: false,
            email: ''
         }
    }
    
    componentDidMount() {
        console.log("it is from component did mount");
    }
    responseGoogle = (response) => {
        var user = response.profileObj;
        var data = {
            'email': user.email,
            'name': user.givenName,
            'social_id': user.googleId,
            'nickname': user.name,
            'fullname': user.name,
            'image_url': user.imageUrl
        }
        var url = `http://139.59.106.227/auth/token`;
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }) 
        .then(response=> {
            if (response.ok) {
                response.json().then(json => {
                    this.setState({ isAuthienticate: true, token: json.token});
                    this.props.location.state = json.token;
                    this.props.history.push('/user');
                });
            } else {
                this.setState({ isSignedUp: true, email: user.email, googleId: user.googleId});
                this.setState({ errorText: 'Email is already existed. Try again'})
            }
        });
    }
    render() {
        
        return (
            <form className="container">
                <div style={{color: 'red'}}>{this.state.errorText}</div>
                <div className="register-container">
                <GoogleLogin
                    clientId="256005499286-rdpukopgue9ri52nf3tj3fhperlo56rb.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
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
