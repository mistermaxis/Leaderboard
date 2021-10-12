class ScoreBuilder {
    
    #item;
    #name;
    #score;

    constructor() {
        this.#item = null;
        this.#name = null;
        this.#score = null;
    }

    build(list, scores) {

        console.log(scores);

        scores.forEach(scoreItem => {

        this.#item = document.createElement('li');
        this.#name = document.createElement('span');
        this.#score = document.createElement('span');

            this.#name.innerText = scoreItem.user;
            this.#score.innerText = scoreItem.score;

            this.#item.appendChild(this.#name);
            this.#item.appendChild(this.#score);
            
            list.appendChild(this.#item);
        });
    }
}

export default ScoreBuilder;