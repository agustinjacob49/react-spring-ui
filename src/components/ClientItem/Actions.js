import React , {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class Actions extends Component{

    constructor(props, context) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        const {id} = this.props;
        this.state = {
            id
        }

    }

    handleClick(e) {
        e.preventDefault();
        const {id} = this.state
        this.props.history.push(`/edit/${id}`);
      }

    render() {
    
        const { onDeleteClick, id } = this.props;
        return (
            <div className = "fabActions">
                <Fab size="small" color="success" aria-label="Delete"  id="fab" alt="View" onClick={this.handleClick}>
                    <AccountCircle fontSize="small" />
                </Fab>
                <Fab size="small" color="primary" aria-label="Delete" id="fab" alt="Delete" onClick={onDeleteClick}>
                    <DeleteIcon fontSize="small" />
                </Fab>
            </div>

        );
    }
}



export default  withRouter(Actions);