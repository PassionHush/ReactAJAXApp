import React, { Component } from "react";

import Nav from "../Nav/Nav";
import api from "../APIService/APIService";
import Body from "../Body/Body";

import "./App.css";

export default class App extends Component {

    state = {
        response: [],
        cards: null
    }

    allPeople = () => {
        api.getAllPeople().then((body) => {
            this.setState({
                response: body,
                cards: "people"
            })
        });
    }

    allStarships = () => {
        api.getAllStarships().then((body) => {
            this.setState({
                response: body,
                cards: "starships"
            });
        });
    }

    allPlanets = () => {
        api.getAllPlanets().then((body) => {
            this.setState({
                response: body,
                cards: "planets"
            });
        });
    }

    personCreation = (id) => {
        api.getPerson(id).then((body) => {
            this.setState({
                response: [body],
                cards: "people"
            });
        });
    }

    planetCreation = (id) => {
        api.getPlanet(id).then((body) => {
            this.setState({
                response: [body],
                cards: "planets"
            });
        });
    }

    starshipCreation = (id) => {
        api.getStarship(id).then((body) => {
            this.setState({
                response: [body],
                cards: "starships"
            });
        });
    }

    render() {

        const { response, cards } = this.state;

        return (
            <React.Fragment>
                <Nav allPeople={this.allPeople} allStarships={this.allStarships} allPlanets={this.allPlanets}
                    personCreation={this.personCreation} planetCreation={this.planetCreation} starshipCreation={this.starshipCreation}
                />
                <div className="container">
                    <Body array={response} cardsType={cards} />
                </div>
            </React.Fragment>
        );
    }
}