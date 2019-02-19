import React from 'react';
//React-Flexbox-Grid
import {Grid, Row, Col} from 'react-flexbox-grid';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Actions from './Actions';

const ClienteItem = ({cliente, onDeleteClick}) =>{
    
    const handleDeleteClick = id => {
        console.log("onDeleteClick : " + id);
        onDeleteClick(id);

    }
    
    
    return(
        <TableRow key={cliente.id}>
            <TableCell>
                {cliente.id}
            </TableCell >
            <TableCell>
                {cliente.nombre}
            </TableCell >
            <TableCell>
                {cliente.apellido}
            </TableCell >
            <TableCell>
                {cliente.email}
            </TableCell >
            <TableCell>
                <Actions  onDeleteClick = { () => { handleDeleteClick (cliente.id)}} id={cliente.id}  ></Actions>
            </TableCell >
        </TableRow >
    );
}

export default ClienteItem;