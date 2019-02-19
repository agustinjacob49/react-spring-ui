import React , {Component} from 'react';

//React-Flexbox-Grid
import { Col, Grid, Row } from 'react-flexbox-grid';

//Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';


//ClientList
import ClientList from './../ClientList';

//Css
import './index.css';


class Home extends Component  {
    async componentDidMount(){
        this.callSpringApi();
      }
    
      callSpringApi= () => {
        //fetch
        const URL = '/api/clientes';
        fetch(URL).then( (prom) =>{
          return prom.json();
        }).then( data => {
          this.setState({data});
        }).catch( error => {
          console.log (error);
        });
      }
    
    
      deleteClient = id =>{
        const URL = `/api/clientes/${id}`;
        fetch(URL , {
          method: 'DELETE'
        }).then( (data) => {
          console.log(data);
          this.callSpringApi();
        }).catch( (error) =>{
          console.log("ERROR", error);
        }); 
      }
    
    
    
      handleDeleteSelection = id =>{
        console.log(id);
        this.deleteClient(id);
      }
    
      handleViewSelection = id =>{
        console.log(id);
      }
      
      render() {
          return (
          <Grid>
            <Col md={12}>
              
              <Row>
                  <Table className="tableClientes">
                    <TableHead>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell >Nombre</TableCell>
                        <TableCell >Apellido</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Acciones</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        this.state ?
                        <ClientList   
                          clientes = {this.state.data} 
                          onDeleteClick = {this.handleDeleteSelection} 
                          onViewClick = {this.handleViewSelection}
                          ></ClientList>  :
                        <LinearProgress id="linearProgress"/>
                      } 
                    </TableBody>
                  </Table>
              </Row>
            </Col>
          </Grid> 
         );
      }

}


export default Home;