class PostRequest {
    #body;
    #method;

    constructor (body) {
        this.#body = body;
        this.#method = 'POST';
    }

    get request() {
        return {
            method: this.#method,
            body: JSON.stringify(this.#body),
            headers: {
                'Content-Type': 'application/json',
            }
        };
    }
}

export default PostRequest;