const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
       return console.log("Unable to connect to Mongo DB server.");
        console.log("Connected to MongoDB server");
// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('59acbbb2f7b8ba9607108eeb')
// },{
//   $set:{
//       completed:true       
//   }  
// },{
//     returnOriginal:false
// }).then((result)=>{
//    console.log(result); 
// }) ;  
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('59aba547ee08e931243cb584')
    },{
        $set:{
            name:'Akshit'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })
//    db.close();
});