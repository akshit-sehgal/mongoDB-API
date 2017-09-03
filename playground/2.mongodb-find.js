const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
       return console.log("Unable to connect to Mongo DB server.");
        console.log("Connected to MongoDB server");
//db.collection('Todos').find({completed:true,_id:new ObjectID('59abe31e29a28788d674a498')}).toArray().then((docs)=>{
//    console.log(JSON.stringify(docs,undefined,2));
//},(err)=>{
//    console.log('Unable to fetch',err);
//});
//    db.collection('Todos').find().count().then((count)=>{
//    console.log(`Todos count:${count}`);
//},(err)=>{
//    console.log('Unable to fetch',err);
//});
db.collection('Users').find({name:'Akshit Sehgal'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('No records found!');
});    
//    db.close();
});