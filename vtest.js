// index.js
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q; // User-controlled input
  res.send(`<h1>Search results for: ${query}</h1>`); // Insecurely injecting user input into HTML
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
