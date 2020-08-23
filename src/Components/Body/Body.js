import React, { Component } from "react";

import "./Body.css";

export default class Body extends Component {

    cards = null;

    peopleCardsCreation = () => {
        const crd = this.props.array.map((item) => {
            return (
                <div key={item.name} className="col-sm-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-white">Name: {item.name}</h5>
                            <p className="card-text text-muted">Gender: {item.gender}</p>
                            <a href={item.homeworld} className="btn btn-outline-secondary">Home World</a>
                        </div>
                    </div>
                </div>
            );
        });
        return (crd);
    }

    planetCardsCreation = () => {
        const crd = this.props.array.map((item) => {
            return (
                <div key={item.name} className="col-sm-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-white">Name: {item.name}</h5>
                            <p className="card-text text-muted">Climate: {item.climate}</p>
                            <p className="card-text text-muted">Population: {item.population}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (crd);
    }

    starshipCardsCreation = () => {
        const crd = this.props.array.map((item) => {
            return (
                <div key={item.name} className="col-sm-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-white">Name: {item.name}</h5>
                            <p className="card-text text-muted">Model: {item.model}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (crd);
    }

    render() {

        switch (this.props.cardsType) {
            case "people":
                this.cards = this.peopleCardsCreation();
                break;
            case "starships":
                this.cards = this.starshipCardsCreation();
                break;
            case "planets":
                this.cards = this.planetCardsCreation();
                break;
            default:
                this.cards = null;

        }

        return (
            <div className="row">
                {this.cards}
            </div>
        );
    }
}
