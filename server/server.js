// C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath E:/Node-js/MongoDB-data
var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');
var {ObjectID}=require('mongodb');
var port=3000;
var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
       res.send(doc); 
    },(err)=>{
        res.status(400).send(err);
    });
    
});
app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
       res.send({todos,code:200});
   },(err)=>{
       res.status(404).send(err);
   }); 
    
});
app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id))
        return res.status(404).send();
    Todo.findById(id).then((todo)=>{
        if(!todo)
            return res.status(404).send();
        res.send({todo,code:200});
    }).catch((err)=>{
        res.status(400).send();
    })
    
});
app.delete('/todos/:id',(req,res)=>{
var id=req.params.id;
if(!ObjectID.isValid(id))
return res.send().status(404);
Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo)
    return res.status(404).send();
    res.send({todo,code:200});
}).catch((e)=>{
    res.status(400).send();
})
});
app.listen(port,()=>{
    console.log('Server listening on port:3000');
});
module.exports={app};