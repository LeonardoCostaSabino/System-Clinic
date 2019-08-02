import React, {Fragment} from 'react';
import {Col} from 'react-bootstrap';
import ControlLabel from '@mapbox/mr-ui/control-label';
import ControlText from '@mapbox/mr-ui/control-text';

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = value => {
        this.setState({ value });
    };

    render(){
        const { Title, Name, Text, Tamanho } = this.props

        return(
            <Fragment>
                <Col xs={Tamanho}>
                    <ControlLabel  text={Title} />
                    <ControlText
                        value={this.state.value}
                        placeholder={Text}
                        name={Name}
                        className="form-control"
                        onChange={this.handleChange} />
                </Col>
            </Fragment>
        )
    };
};

export default Text;