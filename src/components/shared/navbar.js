import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
//Material UI 
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//React-Flexbox-Grid
import { Row } from 'react-flexbox-grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const NavBar = () => {
      console.log(window.location.href);
      const route  = window.location.href;
      const result = route.search("edit");
    return (
        <div>
        <Row>
            <AppBar position= 'sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Spring React UI Client
                </Typography>
                { result < 0 ? 
                <div className ="fabAdd">
                  <Fab size="small" color="secondary" aria-label="Add" href="/edit/new">
                    <AddIcon />
                  </Fab>
                </div> : <span></span>
                }
              </Toolbar>
            </AppBar>
          </Row>
          </div>
    );
}

export default NavBar;