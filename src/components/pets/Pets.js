import React, { Component } from 'react';
import './Pets.css';
import Cats from '../cats/Cats';
import * as constants from '../constants';
import owners from '../../mocks/owner.json';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.cats = this.getPets(owners, constants.types.CAT);
    }
    getPets(owners, type) {
        let pets = { [constants.genders.MALE]: [], [constants.genders.FEMALE]: [] };
        if (owners) {
            owners.forEach(owner => {
                if (owner.pets) {
                    pets[owner.gender] = pets[owner.gender].concat(owner.pets.filter(pet => pet.type === type).map(pet => pet.name));
                }
            });
        }
        console.log(pets);
        return pets;
    }
    render() {
        return (<div className="container">
            <Cats pets={this.cats} />
        </div>);
    }
}
export default Pets;