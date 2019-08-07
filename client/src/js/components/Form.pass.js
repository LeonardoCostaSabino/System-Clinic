import React, {Fragment} from 'react';
import {Col} from 'react-bootstrap';
import ControlLabel from '@mapbox/mr-ui/control-label';

class Pass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = value => {
        this.setState({ value });
    };

    render(){
        const { Title, Name, Text, Tamanho } = this.props;

        return(
            <Fragment>
                <Col xs={Tamanho}>
                    <ControlLabel text={Title} />
                    <input className="form-control" type="password" name={Name}  id="password"/>
                </Col>
            </Fragment>
        )
    };
};

export default Pass;