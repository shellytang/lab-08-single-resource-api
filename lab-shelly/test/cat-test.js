'use strict';

const server = require('../server');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

// const http = require('http');
// const debug = require('debug')('http:cat-test');

// const Router = require('./lib/router');
// const storage = require('./lib/storage');
// const Cat = require('./model/cat');
chai.use(http);

describe('Server module', function() {

  before(done => {
    server.listen(3000);
    done();
  });

// ++++++++++++

  describe('GET method', function() {
    describe('/endpoint', function() {
      it('should respond with a 400 on a bad request', done => {
        chai.request(server)
        .post('/lalala')
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
      });
    });
  });




// ++++++++++++++

// describe('PUT method', function() {
//
//
//
//
// });

// ++++++++++++++++++
//
// describe('POST method', function() {
//
//
//
//
// });

// +++++++++++++++++
// describe('DELETE method', function() {
//
//
//
//
// });

// ++++++++++++++
  after(done => {
    server.close();
    done();
  });
});
