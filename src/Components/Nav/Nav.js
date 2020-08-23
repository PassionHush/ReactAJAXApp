import React from "react";

import Form from "../Form/Form";

const Nav = ({ allPeople, allStarships, allPlanets, personCreation, planetCreation, starshipCreation}) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="fixed-top">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <div className="row">
                                <div className="col-sm-4">
                                    <button onClick={allPeople} type="button" className="btn btn-outline-info mr-2">All People</button>
                                    <button onClick={allStarships} type="button" className="btn btn-outline-info mr-2">All Starships</button>
                                    <button onClick={allPlanets} type="button" className="btn btn-outline-info mr-2">All Planets</button>
                                </div>
                                <div className="col-sm-4 offset-sm-4 mt-2">
                                    <Form personCreation={personCreation} planetCreation={planetCreation} starshipCreation={starshipCreation}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Nav;