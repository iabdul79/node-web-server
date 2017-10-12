const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});

// const Todo = mongoose.model('Todo', {
//   text:{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed:{
//     type: Boolean,
//     default: false,
//   },
//   completedAt:{
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: '      Water plants   '
// });

// newTodo.save().then(doc => {
//   console.log(doc);
// }, err => {
//   console.log('unable to save the new Todo', err)
// });


const User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
});

newUser.save().then(doc => {
  console.log(doc);
}, err => {
  console.log('unable to save the new Todo', err)
});

