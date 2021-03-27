import React, { Component } from 'react';

class Pets extends Component {
    render() {
        if (this.props.pets) {
            return (
                <div className="pets-container">
                    {
                        Object.keys(this.props.pets).map((gender, i) => {
                            return (
                                <div className="row" key={i}>
                                    <div className="col-md-4 owner-gender">{gender}</div>
                                    <div className="col-md-8">&nbsp;</div>
                                    <div className="col-md-4">&nbsp;</div>
                                    <div className="col-md-8 pet-name">{
                                        this.props.pets[gender].map((cat, j) => {
                                            return (
                                                <p key={j}>{cat}</p>
                                            );
                                        })
                                    }</div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    }
}
export default Pets;