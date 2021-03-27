import React, { Component } from 'react';
import './Pets.css';
import Cats from '../cats/Cats';
import owners from '../../mocks/owner.json';

class Pets extends Component {
    constructor(props) {
        super(props);
        const cats = this.getCats(owners);
        console.log(cats);
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
        console.log(pets);
        return pets;
    }
    render() {
        return (<div className="pets-container">
            Pets<Cats />
        </div>);

    }
}
export default Pets;