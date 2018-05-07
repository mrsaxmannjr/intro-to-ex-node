const express = require('express');

const app = express();
// top down
app.use((request, response, next) => {
  console.log(`MW: ${request.method} - ${request.originalUrl} - ${new Date()}`);
  next();
});

app.get('/', (request, response) => {
  response.json({
    message: 'Hello World'
  });
})

app.get('/name/:name', (request, response) => {
  const name = request.params.name
  response.json({
    message: `Hello, ${name}`
  })
});

//request to something that does not exist NOT FOUND handler
app.use((request, response, next) => {
  const error = new Error('Not found')
  response.status(404);
  next(error);
});

// ERROR handler
app.use((error, request, response, next) => {
  response.status(response.statusCode || 500);
  response.json({
    error: error.message,
    stack: error.stack
  })
})

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Listening on port 3000');
});