const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    'Name': 'Abdul',
    'Age': 24,
    'Office': 'Virtusa'
  });
});

app.listen(3000);