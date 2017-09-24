const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({
    'Name': 'Abdul',
    'Age': 24,
    'Office': 'Virtusa'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});