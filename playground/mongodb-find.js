const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Todos').find({completed: 'load'}).toArray().then((list) => {
    console.log(JSON.stringify(list, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data from server', err);
  })
});