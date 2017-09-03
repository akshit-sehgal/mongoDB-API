const {MongoClient, ObjectID}=require('mongodb');
//var obj=new ObjectID();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
       return console.log("Unable to connect to Mongo DB server.");
        console.log("Conencted to MongoDB server");
//    db.collection('Todos').insertOne({text:'something here',completed:false},(err,result)=>{
//        if(err)
//            return console.log('Unable to insert',err);
//        console.log(JSON.stringify(result.ops,undefined,2));
//    });
//    db.collection('Users').insertOne({_id:1231,
//                                      name:'Akshit Sehgal','age':21,location:'New Delhi'},(err,result)=>{
//        if(err)
//            console.log('Unable to insert',err);
//        else console.log(result.ops[0]._id.getTimestamp());
//    });
    
    db.close();
});