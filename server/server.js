var mongoose = require('./db/mongoose');
var ObjectID=require('mongodb').ObjectID;
var Todo = require('./models/todo');
var use = require('./models/user');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
      var todo=new Todo({
        //   text:"Hello World"
      });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
}); 

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },()=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    const id=req.params.id 

        if(!ObjectID.isValid(id)){
            return res.status(404).send()
        }
        Todo.findById(id).then((todo)=>{
            if(!todo){
                res.status(404).send();
            }
            res.send({todo});
        });
},(e)=>{
   res.status(400).send();
});


app.listen(3000, () => {
    console.log('Server Statred');
});