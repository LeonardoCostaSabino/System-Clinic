import React, {Fragment} from 'react';
import {Col} from 'react-bootstrap';
import ControlLabel from '@mapbox/mr-ui/control-label';
import moment from 'moment';
import 'moment/locale/pt'
import 'rc-datepicker/lib/style.css';
import { DatePickerInput } from 'rc-datepicker';

moment.locale('pt-br');

export default class Date extends React.Component {

    state = {
        datePickerDate: '2015-05-13',
        datePickerInputDate: null,
        datePickerInputDate2: null,
        showInput: true,
        disabled: false
    };

    onClear = () => this.setState({ datePickerDate: null })

    log = (...x) => console.log(...x) // eslint-disable-line no-console

    render() {
        const {Tamanho, Title} = this.props;
        return (
            <Fragment>
                <Col xs={Tamanho}>
                    <ControlLabel className="form-control" text={Title} />
                    <DatePickerInput
                        displayFormat='DD/MM/YYYY'
                        onChange={(jsDate, dateString) => this.setState({ datePickerInputDate: dateString })}
                        showOnInputClick
                        locale='pt-BR' />
                </Col>
            </Fragment>
        );
    }
}