var mongoose = require('./db/mongoose');
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



app.listen(3000, () => {
    console.log('Server Statred');
});