import React from 'react';
import ClienteItem from './ClientItem';
//React-Flexbox-Grid
import {Grid, Row, Col} from 'react-flexbox-grid';




//ClienteList 
const ClientList = ({clientes, onDeleteClick}) =>{

    const handleDeleteClick = id => {
        console.log("onDeleteClick : " + id);
        onDeleteClick(id);

    }


    const renderClientList = clientes =>{
        console.log(clientes);
        return clientes.map( (cliente => 
            <ClienteItem cliente = {cliente}  onDeleteClick={() => { handleDeleteClick (cliente.id)}} ></ClienteItem>
        ));
    }
    
    return (
            renderClientList(clientes)
    );


}

export default ClientList;