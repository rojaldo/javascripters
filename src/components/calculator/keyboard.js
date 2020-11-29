import React, { Component } from 'react';
import './keyboard.css';

export class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick(value){
        this.props.myevent(value)
    }

    render() {
        return (<div className="row">
            <div className="col-3">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(7)}>7</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(4)}>4</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(1)}>1</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick('.')}>.</button>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(8)}>8</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(5)}>5</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(2)}>2</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(0)}>0</button>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(9)}>9</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(6)}>6</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick(3)}>3</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick('=')}>=</button>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick('+')}>+</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick('-')}>-</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick('*')}>*</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleClick('/')}>/</button>
            </div>
        </div>

        );
    }
}

export default Keyboard;