const mongoose=require('./../server/db/mongoose');
const Todo=require('./../server/models/todo');

var id='5aa21d956aadfa176455b440';

//find return array of object
//findone return only single  value
//findById retrun same findone
//here we are pass the id in queries
Todo.find({
    _id:id
}).then((todos)=>{
    console.log(todos);  
});