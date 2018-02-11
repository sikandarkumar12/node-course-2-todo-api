const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }

// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
//    console.log(result);

// });

// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
   
//     console.log(result);

// });

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//    console.log(result);
// });

// db.collection('Users').deleteMany({name:'sikandar'});

// db.collection('Users').findOneAndDelete({_id:new ObjectID("5a7d8ca100ea06229846b0e1")}).then((results)=>{
// console.log(JSON.stringify(results ,undefined , 4));

// });

});









