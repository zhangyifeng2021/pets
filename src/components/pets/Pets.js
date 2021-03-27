import React, { Component } from 'react';
import './Pets.css';
import Cats from '../cats/Cats';
import owners from '../../mocks/owner.json';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.cats = this.getCats(owners);
        console.log(this.cats);
    }
    getCats(owners) {
        let pets = { 'Male': [], 'Female': [] };
        if (owners) {
            owners.forEach(owner => {
                if (owner.pets) {
                    pets[owner.gender] = pets[owner.gender].concat(owner.pets.filter(pet => pet.type === 'Cat').map(pet => pet.name));
                }
            });
        }
        return pets;
    }
    render() {
        return (<div className="pets-container">
            <Cats pets={this.cats}/>
        </div>);

    }
}
export default Pets;