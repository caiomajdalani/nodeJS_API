'use strict'

let should = require('chai').should;
let expect = require('chai').expect;
let supertest = require('supertest');
let api = supertest('https://ninjarest.herokuapp.com');

describe('First tests:', () => {
    it('get users', (done) => {
        api.get('/users')
            .expect(200,done)
    });
    it('should return an object with keys and values', (done) =>{
        api.get('/users')
            .expect(200)
            .then((err, res)=>{
                for(let k in res){
                    expect(res[k].body).to.have.property('id');
                    expect(res[k].body.id).not.equal(null);
                    expect(res[k].body).to.have.property('name');
                    expect(res[k].body.name).not.equal(null);
                    expect(res[k].body).to.have.property('email');
                    expect(res[k].body.email).not.equal(null);
                    expect(res[k].body).to.have.property('password');
                    expect(res[k].body.password).not.equal(null);
                };
                done();
            });
    });
        it('should return an specified user', (done)=>{
            api.get('/users/5928d75aaa311b0004085e4c')
                .expect(200)
                .end((err,res)=>{
                    expect(res.body.id).to.equal('5928d75aaa311b0004085e4c');
                    expect(res.body.name).to.equal('Hitmonchan');
                    expect(res.body.email).to.equal('hitmonchan@gmail.com');
                    expect(res.body.password).to.equal('oioioi');
                    done();
                });
        });
});