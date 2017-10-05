const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('59d27dfb8edade0a9c6431ae') },
    {
      $set: {
        location: 'Wall Street, United States'
      },
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to Update data from server', err);
  })
});