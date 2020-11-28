import React, { Component } from 'react';
import './heroes.css';

export class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nuevoHeroe: { name: 'Wonder woman', description: '' }, heroes: [
                { name: "Batman", description: "dark knight" },
                { name: "Superman", description: "man of steel" },
                { name: "Spiderman", description: "spidy" }]
        };
    }

    handleChange(event) {
        if (event.target.id === 'name') {
            const heroe = { name: event.target.value, description: this.state.nuevoHeroe.description };
            this.setState({ nuevoHeroe: heroe })
        } else if (event.target.id === 'description') {
            const heroe = { description: event.target.value, name: this.state.nuevoHeroe.name };
            this.setState({ nuevoHeroe: heroe })
        }
    }

    handleClick() {
        const temp = [...this.state.heroes, this.state.nuevoHeroe];
        this.setState({ heroes: temp });
        console.log(temp);
    }

    handleRemove(index){
        console.log(index);
        let temp = this.state.heroes;
        temp.splice(index,1);
        this.setState({heroes: temp})
    }

    render() {
        const listHeroes = this.state.heroes.map((hero, index) =>
            <li className="list-group-item" key={index} id={'hero-li-' + index}>
                <div class="d-flex justify-content-between">
                    <div class="container">
                        <h4>{hero.name}</h4>
                        <p>{hero.description}</p>
                    </div>
                    <div class="container-fluid d-flex justify-content-end">
                        <button type="button" class="btn btn-danger" onClick={()=>{this.handleRemove(index)}}>Eliminar</button>
                    </div>
                </div>
            </li>);
        console.log(listHeroes);
        return (
            <div className="container">
                <h1>Esta es una lista de héroes</h1>
                <div className="form-group">
                    <label for="">Nombre del héroe</label>
                    <input type="text"
                        className="form-control" name="" id="name" aria-describedby="helpId" placeholder=""
                        value={this.state.nuevoHeroe.name} onChange={(event) => this.handleChange(event)} />

                    <label for="">Descripción</label>
                    <input type="text"
                        className="form-control" name="" id="description" aria-describedby="helpId" placeholder=""
                        value={this.state.nuevoHeroe.description} onChange={(event) => this.handleChange(event)} />

                    <button type="button" class="btn btn-primary" onClick={() => this.handleClick()}>Nuevo héroe</button>
                </div>
                <ul className="list-group">
                    {listHeroes}
                </ul>
            </div>
        );

    }
}

export default Heroes;