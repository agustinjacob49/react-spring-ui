//React
import React, { Component } from 'react';
import Home from './components/home';
import ClientEdit from './components/ClientEdit'
import NavBar from './components/shared/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Col, Grid, Row } from 'react-flexbox-grid';


//CSS
import './App.css';




class App extends Component {
  

  render(){
    return (<div>
      <Grid>
            <Col md={12}>
              <NavBar/>
              <Router>
                <Switch>
                  <Route path='/' exact={true} component = {Home} />
                  <Route path='/edit/:id' exact={true} component = {ClientEdit} />
                  <Route path='/edit/new' exact={true} component = {ClientEdit} />
                </Switch>
              </Router>
            </Col>
      </Grid>
    </div>);
  }

  
}


export default App;
