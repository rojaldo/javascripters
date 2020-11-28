import React, { Component } from 'react';
import './heroes.css';

export class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = {nuevoHeroe: "Wonder Woman", heroes: ["Batman", "Superman", "Spiderman"]};
    }

    handleChange(event){
        this.setState({nuevoHeroe: event.target.value})
    }

    handleClick(){
        const temp = [...this.state.heroes, this.state.nuevoHeroe];
        this.setState({heroes: temp});
    }

    render() {
        const listHeroes = this.state.heroes.map((hero, index) => <li className="list-group-item" key={index} id={'hero-li-' + index}>{hero}</li>);
        console.log(listHeroes);
        return (
            <div className="container">
                <h1>Esta es una lista de héroes</h1>
                <div className="form-group">
                    <label for="">Heroes</label>
                    <input type="text"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="" 
                        value={this.state.nuevoHeroe} onChange={(event)=>this.handleChange(event)}/>
                    <button type="button" class="btn btn-primary" onClick={()=>this.handleClick()}>Nuevo héroe</button>
                </div>
                <ul className="list-group">
                    {listHeroes}
                </ul>
            </div>
        );

    }
}

export default Heroes;