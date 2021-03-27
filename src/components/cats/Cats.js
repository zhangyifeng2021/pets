import React, { Component } from 'react';
import * as constants from '../constants';

class Pets extends Component {
    render() {
        if (this.props.pets) {
            let maleCats = this.props.pets.Male.map((cat, idx) => <p key={idx}>{cat}</p>);
            let femaleCats = this.props.pets.Female.map((cat, idx) => <p key={idx}>{cat}</p>);
            return (
                <div className="pets-container">
                    <div className="row">
                        <div className="col-md-4 owner-gender">{constants.genders.MALE}</div>
                        <div className="col-md-8">&nbsp;</div>
                        <div className="col-md-4">&nbsp;</div>
                        <div className="col-md-8 pet-name">{maleCats}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 owner-gender">{constants.genders.FEMALE}</div>
                        <div className="col-md-8">&nbsp;</div>
                        <div className="col-md-4">&nbsp;</div>
                        <div className="col-md-8 pet-name">{femaleCats}</div>
                    </div>
                </div>
            );
        }
    }
}
export default Pets;