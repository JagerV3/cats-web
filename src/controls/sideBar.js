import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

const logo = {
    height: '20%',
    backgroundColor: '#616161',
    textAlign: 'center'
};
class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
           open: false
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false})
    render() {
        return (
            <div>
                <AppBar title="Cat" style={{backgroundColor: '#616161', textTransform: 'uppercase'}}
                 onLeftIconButtonTouchTap={this.handleToggle}/>
                <Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}>
                    <div style={logo}>Cats App</div>
                    {this.props.items.map((item, index) => (
                        <Link key={index} to={item.path} style={{textDecoration: 'none'}}>
                            <MenuItem key={index} onClick={this.handleClose}>
                                {item.name}
                            </MenuItem>
                        </Link>
                    ))}
                </Drawer>
            </div>
            
        );
    }
}

export default SideBar;
