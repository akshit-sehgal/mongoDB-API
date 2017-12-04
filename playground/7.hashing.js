const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
var password='123abec';
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    })
});
var hashedPassword='$2a$10$4jbvpBpWwZvkl5MsYlk8AuzbbyiMJVGePNrTP5PGtKGidqpubt1EO';
bcrypt.compare(password,hashedPassword,(err,res)=>{
    console.log(res);
})
// var data={
//     id:1
// }
// var token=jwt.sign(data,'123abc');
// console.log(token);
// let decoded=jwt.verify(token,'123abc');
// console.log('decoded',decoded);
// var message='I am user number 3';
// var hash=SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// let data={
//     id:4
// };
// let token={
//     data,
//     hash:SHA256(JSON.stringify(data)+'secret').toString()
// }
// let resultHash=SHA256(JSON.stringify(data)+'secret').toString();
// if(resultHash==token.hash){
//     console.log('Data was not changed');
// }
// else{
//     console.log('Data was changed');
// }