const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Users').insertOne({
    name: 'Abraham John',
    age: 22,
    location: '22 Bakers Street, England'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert in dataBase');
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })
  db.close();
});