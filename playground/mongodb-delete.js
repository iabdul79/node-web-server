const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  // deleteMany
  // db.collection('Users').deleteMany({name: 'Abraham Bric'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to delete data from server', err);
  // })

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: ObjectID('59d669fbcf77b9a5c068178a')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to delete data from server', err);
  })
});