var mongoose = require('mongoose')
require('dotenv').config({path : '../.env'})

//intializing mongoose connection
var conn = mongoose.createConnection(process.env.DB_URI, {useNewUrlParser: true,useUnifiedTopology: true})
conn.once('open', () => {
    console.log('Article Connection Successful')
})


var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    sub_heading: String,
    author: String,
    date: Date,
    content: String
})


var articleModel = conn.model('articleModel', articleSchema)

//function to get array of all articles
function getArticles(){
    return new Promise((resolve,reject) => {
        articleModel.find((err, docs) => {
            if (err){
                return reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}


module.exports = {
    articleModel,
    getArticles
}