// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
      console.log(JSON.stringify(result.ops, undefined, 5));
}); 
});



// db.collection('Users').insertOne({   
// name:'sikandar',
// age:25,
// location:'Banglore',
// },(err , result)=>{
// if(err){
//  console.log("there was some error with the database connectivity", err);
// }
// else{
//     // console.log('the data inserted is '+result.ops[0]._id.getTimestamp());
//     console.log('object id here is  '+result.ops[0]._id);
// }});
// db.close();

// });







