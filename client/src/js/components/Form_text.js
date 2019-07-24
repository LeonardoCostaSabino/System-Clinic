import React from 'react';
import { Col, Row } from 'react-bootstrap';

class Text extends React.Component {
    constructor(props){
        super(props);  
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        const { Title, Name, Text, Tamanho } = this.props

        return(
        <Col xs={Tamanho}>
            <label>{Title}</label>
            <input type="text" className="form-control" onChange={this.handleInputChange} placeholder={Text} name={Name} />
        </Col>
        )
    };
};

export default Text;