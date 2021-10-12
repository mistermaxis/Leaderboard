import PostRequest from "./post";

class Api {
    #baseUrl;
    #newGame;
    
    constructor () {
        this.#baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
        this.#newGame = 'Microverse Enigma Force';
    }

    async createGame() {
        let newGame = {
            name: this.#newGame,
        }
        
        console.log(JSON.stringify(newGame));

        await fetch(this.#baseUrl, new PostRequest(newGame).request)
        .then(response => response.json())
        .then(response => console.log(response));
    }
}

export default Api;