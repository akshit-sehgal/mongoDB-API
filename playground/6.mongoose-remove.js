const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
const{ObjectID}=require('mongodb');
// Todo.remove({}).then((result)=>{
//     console.log(result.result);
// });
// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5a2262f12e5e717a608923dd').then((todo)=>{
console.log(todo);
});