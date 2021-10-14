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
      scores.forEach((scoreItem, index) => {
        setTimeout(() => {
          this.#item = document.createElement('li');
          this.#item.classList.add('score-item');

          this.#name = document.createElement('span');
          this.#score = document.createElement('span');
  
          this.#name.innerText = `${scoreItem.user}: `;
          this.#score.innerText = scoreItem.score;
  
          this.#item.appendChild(this.#name);
          this.#item.appendChild(this.#score);
          list.appendChild(this.#item);
        }, 250 * index);
      });
    }
}

export default ScoreBuilder;