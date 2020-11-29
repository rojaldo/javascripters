import React, { Component } from 'react';
import {HeroesList} from './heroeslist';
import {HeroForm} from './form';
import './heroes.css';

export class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [
                { name: "Batman", description: "dark knight" },
                { name: "Superman", description: "man of steel" },
                { name: "Spiderman", description: "spidy" }]
        };
    }



    handleRemove(index) {
        console.log(index);
        let temp = this.state.heroes;
        temp.splice(index, 1);
        this.setState({ heroes: temp })
    }

    handleNewHero(hero) {
        const temp = [...this.state.heroes, hero];
        console.log(JSON.stringify(temp));
        this.setState({heroes: temp});
    }

    render() {

        return (
            <div className="container">
                <h1>Esta es una lista de héroes</h1>
                <HeroForm heroes={this.state.heroes} newhero={(hero)=> this.handleNewHero(hero)}></HeroForm>
                <HeroesList heroes={this.state.heroes} remove={(i)=>{this.handleRemove(i)}}></HeroesList>
            </div>
        );

    }
}

export default Heroes;