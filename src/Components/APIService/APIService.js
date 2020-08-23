class APIService {
    _baseURL = "https://swapi.dev/api";

    async getData(url) {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error status ${res.status}`);
        }

        const body = await res.json();

        return body;
    }

    async getAllPeople() {
        const response = await this.getData(`${this._baseURL}/people/`);

        return response.results; // Returns an array of objects
    }

    async getPerson(id) {
        const response =  await this.getData(`${this._baseURL}/people/${id}/`);

        return response; // Returns an object
    }

    async getAllStarships() {
        const response = await this.getData(`${this._baseURL}/starships/`);

        return response.results; // Returns an array of objects
    }

    async getStarship(id) {
        const response = await this.getData(`${this._baseURL}/starships/${id}/`);

        return response; // Returns an object
    }

    async getAllPlanets() {
        const response = await this.getData(`${this._baseURL}/planets/`);

        return response.results; // Returns an array of objects
    }

    async getPlanet(id) {
        const response = await this.getData(`${this._baseURL}/planets/${id}/`);

        return response; // Returns an object
    }
}

const api = new APIService();

export default api;