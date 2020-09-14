const chai = require('chai')
const index = require('../index.js')
const chaiHttp = require('chai-http')
var articles = require('./models/articles.js')
chai.should()

chai.use(chaiHttp)



describe('GET /', () => {
    it('it should return Backend-API is live', function(done) {
        chai.request(index)
    .get('/')
    .end((err,res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(true)
        res.body.should.have.property('message').eql("Backend-API is live")
        done()
        })
    })
})


describe('GET /api/articles', () => {
    it('it should have status code 200 and success property', function(done) {
        this.timeout(9000)
        chai.request(index)
        .get('/api/articles')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true)
            done()
        })

    })
})

    