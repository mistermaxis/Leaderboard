import PostRequest from './post.js';

class Api {
    #baseUrl;

    #gameId;

    constructor() {
      this.#baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
      this.#gameId = 'kABQMa1FIPU1tSlHglRO';
    }

    async createScore(user, score) {
      const newScore = {
        user,
        score,
      };

      const gameUrl = `${this.#baseUrl + this.#gameId}/scores/`;

      const postResult = await fetch(gameUrl, new PostRequest(newScore).request)
        .then((response) => response.json());

      return postResult;
    }

    async getScores() {
      const gameUrl = `${this.#baseUrl + this.#gameId}/scores/`;

      const requestResult = await fetch(gameUrl)
        .then((response) => response.json());

      return requestResult;
    }
}

export default Api;