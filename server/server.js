const express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.status(404).send({
        error:'Page not Found',
        name:'ToDo App v1.0'
    });
});


app.get('/users', (req, res)=>{
    var users = [];
    users.push({
        name:'Gaurav',
        age: 33
        },{
        name: 'Dinkar',
        age: 32
        },{
            name: 'Aviral',
            age: 32
        });
    console.log(users);
    res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;