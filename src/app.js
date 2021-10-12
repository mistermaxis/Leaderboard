import Api from "./api";
import ScoreBuilder from "./score-builder";

class App {
    #scoreForm;
    #scores;
    #scoreList;
    #scoreBuilder;
    #refreshButton;
    #scoreApi;

    constructor() {
        this.#scoreApi = new Api();
        this.#scoreForm = document.getElementById('form');
        this.#refreshButton = document.getElementById('refresh');
        this.#scoreList = document.getElementById('scores');
        this.#scores = null;
        this.#scoreBuilder = new ScoreBuilder();
    }

    start() {
        this.#scoreForm.addEventListener('submit', (e) => this.#postScore(e));
        this.#refreshButton.addEventListener('click', () => this.#refreshScores());
    }

    #postScore(event) {
        event.preventDefault();

        const name = event.currentTarget[0];
        const score = event.currentTarget[1];
        
        if (name && score) {
            this.#scoreApi.createScore(name.value, parseInt(score.value));

            name.value = '';
            score.value = '';
        }
    }

    async #refreshScores() {

        this.#scoreApi.getScores().then(scores => {
            this.#scoreBuilder.build(this.#scoreList, scores.result);
        });
    }
}

export default App;