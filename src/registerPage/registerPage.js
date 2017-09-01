import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import './registerPage.css';
import receiveToken from '../actions/userActions';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorText: ''
         }
    }
    
    responseGoogle = (response) => {
        const { dispatch, history } = this.props;
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
          }).then(response => response.json())
            .then(json => dispatch(receiveToken(user, json)))
            .then(()=> history.push('/user'))
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
                </div>
            </form>
            
        );
    }
}

export default connect((state) => ({
    token: state.token
}))(RegisterPage);
