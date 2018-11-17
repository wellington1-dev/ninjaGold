//express
const express = require('express');
const app = express();

//body-parser

const bodyParser = require('body-parser');
// configure body-parser to read JSON
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));
//changing the Welcome To mean stack assignment, you'll need to go to app folder and inside, you'll be able to check the app.component.ts


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninjagold');

var TaskSchema = new mongoose.Schema({
    total: {
        type: Number
    }
}, {
        timestamps: true
    });

mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'User' Registering Model
var Task = mongoose.model('Task')


app.get("/farm", (req, res) => {
    const randGold = Math.floor(Math.random() * 5) + 3
    Task.find({}, function (err, records) {
 
        record = records[1]
        record.total = record.total + randGold
        record.save(function (err) {
            res.json(record.total)
        })

    })
})

app.get("/cave", (req, res) => {
    const randGold = Math.floor(Math.random() * 7) + 3
    // Ninjagold.find({}, function (err, records) { this one is incorrect because ninja gold it wasn't invoked 
        Task.find({}, function (err, records) {
        record = records[1]
        record.total = record.total + randGold
        record.save(function (err) {
            res.json(record.total)
        })

    })
})
app.get("/house", (req, res) => {
     const randGold = Math.floor(Math.random() * 10) + 3
   // Ninjagold.find({}, function (err, records) { this one is incorrect because ninja gold it wasn't invoked 
   Task.find({}, function (err, records) {
        record = records[1]
        record.total = record.total + randGold
        record.save(function (err) {
            res.json(record.total)
        })

    })
})
app.get("/casino", (req, res) => {
    const randGold = Math.floor(Math.random() / 10) - 3
    // Ninjagold.find({}, function (err, records) { this one is incorrect because ninja gold it wasn't invoked 
    Task.find({}, function (err, records) {
        record = records[1]
        record.total = record.total + randGold
        record.save(function () {
            res.json(record.total)
        })

    })
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})