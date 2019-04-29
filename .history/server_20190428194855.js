const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

var db

MongoClient.connect('mongodb+srv://dev_sweets:naynay@76@mongodb-practice-ns9s9.mongodb.net/test?retryWrites=true', (err , database) => {
    if (err) return console.log(err)
    db = client.db('MongoDb-Practice')
    app.listen(3000, function () {
    console.log('listening on 3000')
});

})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})