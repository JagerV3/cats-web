import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserByIDIfNeeded } from '../actions/userActions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class UserPage extends Component {
    constructor(props){
        super(props);
        console.log(this.props, "constructor");
    }
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch((getUserByIDIfNeeded()));
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, "WILL UPDATE");
    }
    
    render() {
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        let actionButton = null;
        if (this.props.info.tasks.length === 0) {
            actionButton = <FlatButton label="Add Task" onClick={this.handleReduce} />
        } else {
            actionButton= <FlatButton label="Show Tasks" onClick={this.handleReduce} />
        }
        return (
            <Card >
                <CardHeader
                title={this.props.info.nickname}
                avatar={this.props.info.image_url}
                actAsExpander={false}
                showExpandableButton={false}
                />
                <div style={{padding: '1%'}}>
                    Email: {this.props.info.email}
                </div>
                <div style={{padding: '1%'}}>
                    Name: {this.props.info.fullname}
                </div>
                <CardActions>
                    <FlatButton label="Edit" onClick={this.handleExpand} />
                    {actionButton}
                </CardActions>
            </Card>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.user.isLoading,
        info: state.user.info.user
    }
  }
  
export default connect(mapStateToProps)(UserPage)