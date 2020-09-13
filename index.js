var express = require('express')
var app = express()
require('dotenv').config()
var articles = require('./models/articles.js')


app.get('/', (req,res) => {
    res.send('Hello backend-api')
})

app.get('/api/articles', (req,res) => {
    articles.getArticles().then((docs) => {
        res.json({success: true, articles: docs})
    }).catch((err) => {
        res.json({success: false, message: err})
    })
})

//listener
var listener = app.listen(process.env.PORT || 8001, () => {
    console.log('Backend-api listening at port ', listener.address().port )
} )

