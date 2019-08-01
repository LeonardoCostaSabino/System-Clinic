import moment from 'moment';
import ControlDate from '@mapbox/mr-ui/control-date';

export default class Date extends React.Component {
    state = { dateValue: '' };

    onDateChange = dateValue => {
        this.setState({ dateValue });
    };

    render() {
        const {Text,Name} = this.props;
        return (
            <Fragment>
                <Col xs={Tamanho}>
                    <ControlDate
                        id="singleDate"
                        moment={moment}
                        value={this.state.dateValue}
                        onChange={this.onDateChange}
                        placeholder={Text}
                        format={'DD MM YYYY'}
                        name={Name}
                    />
                </Col>
            </Fragment>
        );
    }
}