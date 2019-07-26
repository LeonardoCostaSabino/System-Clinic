import React, {Fragment} from 'react';
import {Col} from 'react-bootstrap';
import ControlLabel from '@mapbox/mr-ui/control-label';
import ControlText from '@mapbox/mr-ui/control-text';

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
            <Fragment>
                <Col xs={Tamanho}>
                    <ControlLabel text={Title} />
                    <ControlText /><input type="text" className="form-control" onChange={this.handleInputChange} placeholder={Text} name={Name} />
                </Col>
            </Fragment>
        )
    };
};

export default Text;