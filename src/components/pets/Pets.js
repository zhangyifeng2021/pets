import React, { Component } from 'react';
import './Pets.css';
import Cats from '../cats/Cats';

class Pets extends Component {
    render() {
        return (<div className="pets-container">
            Pets<Cats />
        </div>);

    }
}
export default Pets;