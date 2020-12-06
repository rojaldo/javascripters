import React, { Component, Fragment } from 'react';
import './dateapod.css';
import TextField from '@material-ui/core/TextField';
import Moment from 'moment';

export class DateApod extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.sendDate(Moment(new Date()).format("YYYY-MM-DD"));
    }

    handleDateChange = (event) => {
        console.log(event.target.value);
        this.props.sendDate(event.target.value)
        this.setState({ selectedDate: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <TextField
                    id="date"
                    label="Busca una fecha"
                    type="date"
                    defaultValue={Moment(new Date()).format("YYYY-MM-DD")}
                    onChange={(event) => this.handleDateChange(event)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Fragment>);
    }
}

export default DateApod;