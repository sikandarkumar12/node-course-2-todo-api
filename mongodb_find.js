const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
else{
//    db.collection('Todos').find({_id:new ObjectID('5a7d8e5465d4c60a94a0622b')}).toArray().then((docs)=>{
//    console.log(' Todos ');
//    console.log(JSON.stringify(docs, undefined ,4));

// }, (err)=>{
//       console.log('unable to fetch the data',err);
// });  

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count: ${count}`);
//}, (err)=>{
//});  
db.collection('Users').find({name:'sikandar'}).toArray().then((docs)=>{
   console.log(JSON.stringify(docs , undefined , 4));   
});
db.close();

}});

















