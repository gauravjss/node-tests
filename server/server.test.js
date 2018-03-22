const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

//Server Describe

describe('Server REST Calls', ()=>{
    describe('/GET/ ',()=>{
        it('should return Hello World response', (done)=> {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) =>{
                    expect(res.body).toInclude({
                        error:'Page not Found'
                    })
                })
                .end(done);
        });
    });

    describe('/GET/USERS/ ',  ()=> {
        it('should check for my name in an Array', (done)=> {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) =>{
                    expect(res.body).toInclude({
                        name: 'Gaurav',
                        age: 33
                    })
                })
                .end(done);
        });
    });
});


