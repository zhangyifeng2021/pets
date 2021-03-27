import React, { Component } from 'react';
import axios from 'axios';
import Cats from '../cats/Cats';
import './Pets.css';
import * as constants from '../constants';

// const owners = require('../../mocks/owner.json');

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        axios.get(this.props.link).then(response => {
            console.log(response);
            this.setState({
                pets: this.getPets(response.data, constants.types.CAT),
                isLoaded: true
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                isLoaded: false,
                error: error
            })
        });
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
        // console.log(pets);
        return pets;
    }
    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>
        } else {
            return (<div className="container">
                <Cats pets={this.state.pets} />
            </div>);
        }
    }
}
export default Pets;