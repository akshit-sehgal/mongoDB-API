const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
const{ObjectID}=require('mongodb');
var id='59b0e905afa7a690321f1c22';
var uid='59aeb49814f215b004ace0ec';
if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}
else{
//Todo.find({
//    _id:id
//}).then((todos)=>{
//    console.log('Todos:\n',todos);
//});
//Todo.findOne({
// _id:id   
//}).then((todo)=>{
//   console.log('Todo:\n',todo); 
//});
Todo.findById(id).then((todo)=>{
    if(!todo)
        return console.log('ID not found');
    console.log('Todo by ID: \n',todo);
}).catch((err)=>console.log(err));
}
User.findById(uid).then((user)=>{
   if(!user)
       return console.log('UID not found')
    console.log('UID:\n ',JSON.stringify(user,undefined,2));
}).catch((err)=>{
    console.log(err);
});