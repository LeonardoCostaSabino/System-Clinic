import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';

export default class Consulta extends React.Component {

    constructor(props){
        super(props);
        this.products = axios.get("http://localhost:8080/api/telefone")
            .then(response => {
                response.data
            });
    }

    // data={ this.products }

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