var express = require('express')
var app = express()
require('dotenv').config()
var articles = require('./models/articles.js')


app.get('/', (req,res) => {
    res.status(200).json({success: true, message: "Backend-API is live"})
})

app.get('/api/articles', (req,res) => {
    articles.getArticles().then((docs) => {
        res.status(200).json({success: true, articles: docs})
    }).catch((err) => {
        res.status(400).json({success: false, message: err})
    })
})


//listener
module.exports = app.listen(process.env.PORT || 8001, () => {
    console.log('Backend-api listening at port ',process.env.PORT )

} )

