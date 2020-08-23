import React, { Component } from "react";

export default class Form extends Component {

    state = {
        personInput: "",
        starshipInput: "",
        planetInput: ""
    }

    setValue = (e) => {
        const id = e.target.getAttribute("id");
        switch (id) {
            case "person":
                this.setState({
                    personInput: e.target.value
                });
                break;
            case "starship":
                this.setState({
                    starshipInput: e.target.value
                });
                break;
            case "planet":
                this.setState({
                    planetInput: e.target.value
                });
        }
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col input-group">
                        <input onChange={this.setValue} type="text" id="person" className="form-control" value={this.state.personInput} />
                        <div className="input-group-append">
                            <button onClick={() => {
                                this.props.personCreation(this.state.personInput);
                                this.setState({ personInput: "" });
                            }} type="button" className="btn btn-outline-secondary">Person</button>
                        </div>
                    </div>
                    <div className="col input-group">
                        <input onChange={this.setValue} type="text" id="starship" className="form-control" value={this.state.starshipInput} />
                        <div className="input-group-append">
                            <button onClick={() => {
                                this.props.starshipCreation(this.state.starshipInput);
                                this.setState({ starshipInput: "" });
                            }} type="button" className="btn btn-outline-secondary">Starship</button>
                        </div>
                    </div>
                    <div className="col input-group">
                        <input onChange={this.setValue} type="text" id="planet" className="form-control" value={this.state.planetInput} />
                        <div className="input-group-append">
                            <button onClick={() => {
                                this.props.planetCreation(this.state.planetInput);
                                this.setState({ planetInput: "" });
                            }} type="button" className="btn btn-outline-secondary">Planet</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
