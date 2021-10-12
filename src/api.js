import { result } from "lodash";
import PostRequest from "./post";

class Api {
    #baseUrl;
    #gameId;
    
    constructor () {
        this.#baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
        this.#gameId = 'IuTVpEO5Ut4z13eiFUBV';
    }

    async createScore(user, score) {
        let newScore = {
            user,
            score,
        };

        console.log(JSON.stringify(newScore));

        let gameUrl = this.#baseUrl + this.#gameId + '/scores/';

        fetch(gameUrl, new PostRequest(newScore).request)
        .then(response => response.json())
        .then(response => console.log(response));
    }

    async getScores() {

        const gameUrl = this.#baseUrl + this.#gameId + '/scores/';
        
        let requestResult = await fetch(gameUrl)
        .then(response => response.json());

        return requestResult;
    }
}

export default Api;