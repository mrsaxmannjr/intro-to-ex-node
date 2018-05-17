const express = require('express');
const app = express();
const morgan = require('morgan'); //logs events

app.use(morgan('dev'));

var heroAPI = [
  {
    id: 1,
    brand: "Marvel",
    heroes: ["Iron Man", "Captain America"],
    numberOfMovies: 10
  },
  {
    id: 2,
    brand: "DC",
    heroes: ["Superman", "Batman"],
    numberOfMovies: 20
  },
  { id: 3,
    brand: "Manga",
    heroes: ["All Might", "Goku"],
    numberOfMovies: 300
  }
];

function getId(paramsId) {
  return heroAPI.find(hero => hero.id === parseInt(paramsId) )
}

app.get('/:id', (request, response) => {
  response.json(getId(request.params.id))
})

app.listen(3000, () => {
console.log("Server running on port 3000");
})