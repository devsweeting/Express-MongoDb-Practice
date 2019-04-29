const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var db
var user = encodeURI('dev_sweets')
var password = encodeURI('naynay%4076')

MongoClient.connect(`mongodb+srv://${user}:${password}@mongodb-practice-ns9s9.mongodb.net/test?retryWrites=true`, (err, client) => {
    if (err) return console.log(err)
    db = client.db('MongoDb-Practice')
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.use(bodyParser.urlencoded({extended: true}))



app.get('/', (req, res) => {
    db.collection('qoutes').find().toArray((err, result) =>{
        if (err) return console.log(err)
        console.log(result)
    })
    res.sendFile(__dirname + '/index.html')
    var cursor = db.collection('qoutes').find()
})



app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})


