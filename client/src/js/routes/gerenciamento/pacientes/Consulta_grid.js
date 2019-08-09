import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import axios from 'axios';

export default class Consulta extends React.Component {

    render(){
        return(
            <BootstrapTable >
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }

}