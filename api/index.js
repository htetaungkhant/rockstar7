const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

const app = express();
const db = mongojs('todo', ['tasks']);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/tasks', function (req, res) {
    db.tasks.find(function (err, data) {
        res.json(data);
    });
});

app.get('/tasks/:id', function (req, res) {
    const id = req.params.id;
    db.tasks.find({ _id: mongojs.ObjectID(id) }, function (err, data) {
        res.json(data);
    });
});

app.post('/tasks', function (req, res) {
    const subject = req.body.subject;
    db.tasks.insert({ subject, status: 0 }, function (err, data) {
        res.json(data);
    });
});

app.listen(8000, function () {
    console.log('API server is running at port 8000');
});