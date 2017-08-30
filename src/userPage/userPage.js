import React, { Component } from 'react';


class UserPage extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            token :'hahs'
         }
    }
    
    componentDidMount() {
        
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "it is next props");
    }
    
    getUser() {
        console.log("it is from user page")
        console.log(this.props);
    }
    render() {
        return (
            <div>This is from user page</div>
        );
    }
}


export default UserPage;
