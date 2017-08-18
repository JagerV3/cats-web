import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './registerPage.css'
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
    login(list) {
        console.log(list);
    }
    handleClick(e) {
        console.log(this.state.name, this.props.name, this);
        this.login("element clicked");
    }
    componentDidMount() {
        this.login("it is form component did mount")
    }
    render() {
        return (
            <form className="container">
                <div className="register-container">
                    <h4 style={{ color: '#616161'}}> Register Page  </h4>
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
                    <RaisedButton label="Register" onClick={this.handleClick.bind(this)} primary={true} style={style} />
                </div>
            </form>
            
        );
    }
}

RegisterPage.defaultProps = {
    name: 'Instagram Login'
};

export default RegisterPage;
