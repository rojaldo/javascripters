import React, { Component } from 'react';
import './apod.css';
import DateApod from './dateapod';

import ShowApod from './showapod';


export class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = { apodDates: [] }
    }

    addDate(date) {
        const temp = [...this.state.apodDates, date];
        this.setState({ apodDates: temp })
    }
    render() {
        const apodList = this.state.apodDates.map((date, index) => {
            const result =
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <ShowApod myDate={date} key={index}></ShowApod>
                </div>;
            return result;
        })

        return (
            <div className="container">
                <DateApod sendDate={(date) => { this.addDate(date) }}></DateApod>

                <div className="row mt-3">

                    {apodList}
                </div>

            </div>
        );
    }



}

export default Apod;