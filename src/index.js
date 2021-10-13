import App from './app.js';
import './style.css';

//const scoreApp = new App();

//scoreApp.start();

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    body: JSON.stringify({
        name: "Game",
    }),
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
})
.then(response => response.json())
.then(response => console.log(response));