import Api from './api.js';
import ScoreBuilder from './score-builder.js';

class App {
    #scoreForm;
    #scoreList;
    #resultParagraph;
    #scoreBuilder;
    #refreshButton;
    #scoreApi;

    constructor() {
      this.#scoreApi = new Api();
      this.#scoreForm = document.getElementById('form');
      this.#refreshButton = document.getElementById('refresh');
      this.#scoreList = document.getElementById('scores');
      this.#resultParagraph = document.getElementById('result');
      this.#scoreBuilder = new ScoreBuilder();
    }

    start() {
      this.#scoreForm.addEventListener('submit', (e) => this.#postScore(e));
      this.#refreshButton.addEventListener('click', () => this.#refreshScores());
      this.#refreshScores();
    }

    #postScore(event) {
      event.preventDefault();

      const name = event.currentTarget[0];
      const score = event.currentTarget[1];

      if (name && score) {
        this.#scoreApi.createScore(name.value, parseInt(score.value, 10)).then((response) => {
          this.#resultParagraph.innerText = response.result;
          setTimeout(() => {
            this.#resultParagraph.innerText = '';
          }, 2500);
          this.#refreshScores();
        });

        name.value = '';
        score.value = '';
      }
    }

    #refreshScores() {
      this.#scoreList.innerHTML = '';

      this.#scoreApi.getScores().then((scores) => {
        this.#scoreBuilder.build(this.#scoreList, scores.result);
      });
    }
}

export default App;