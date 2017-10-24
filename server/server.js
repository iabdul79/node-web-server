const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

// Adding New Todos via Post
app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    text: req.body.text
  });
  newTodo.save().then(doc => {
    res.send(doc);
  }, err => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => console.log('Listening at Port 3000'));

// newTodo.save().then(doc => {
//   console.log(doc);
// }, err => {
//   console.log('unable to save the new Todo', err)
// });


// var newUser = new User({
// });

// newUser.save().then(doc => {
//   console.log(doc);
// }, err => {
//   console.log('unable to save the new Todo', err)
// });

