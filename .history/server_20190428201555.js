const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

var db
var user = encodeURI('dev_sweets')
var password = encodeURI('naynay@76')
var uri = `mongodb+srv://${user}:${password}@mongodb-practice-ns9s9.mongodb.net/test?retryWrites=true`

MongoClient.connect((uri, { useNewUrlParser: true }), (err , database) => {
    if (err) return console.log(err)
    db = client.db('MongoDb-Practice')
    app.listen(3000, function () {
    console.log('listening on 3000')
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})