'use strict';

const server = require('../server');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;
// const Cat = require('../model/cat');
// const storage = require('../lib/storage');
// const debug = require('debug')('http:cat-test');
// const Router = require('../lib/router');

chai.use(http);

describe('Server module', function() {
  before(done => {
    server.listen(3000);
    done();
  });

// ++++++++++++
  describe('GET method', function() {

    describe('/endpoint', function() {
      it('should respond with 400 on a bad request', done => {
        chai.request(server)
        .get('/lala')
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
      });
    });

    describe('/api/cat', function() {
      it('should respond with 404 for an id not found', done => {
        chai.request(server)
        .get('/api/cat')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
      });

      it('should respond with 200 for request with valid id', done => {
        chai.request(server)
        .get('/api/cat')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
      });
    });
  });
// ++++++++++++++

describe('PUT method', function() {
  describe('/api/cat', function() {
    it('should respond with 400 if no body or invalid body provided', done => {
      chai.request(server)
      .put('/api/cat')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
    });
    it('should respond with 204 and json with a valid id', done => {
      chai.request(server)
      .put('/api/cat')
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
    });
  });
});

// ++++++++++++++++++
//
describe('POST method', function() {
  describe('/api/cat endpoint', function() {
    it('should respond with a 400 on a bad request', done => {
      chai.request(server)
      .post('/lalal')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
    });
    it('should respond with a 200 for post request with valid body', done => {
      chai.request(server)
      .post('/api/cat')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});

// +++++++++++++++++
  describe('DELETE method', function() {
    describe('/api/cat endpoint', function() {
      it('should respond with a 404 for valid request for id not found', done => {
        chai.request(server)
        .delete('/lalal')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
      });
      it('should respond with a 202 for valid request for id not found', done => {
        chai.request(server)
        .delete('/lalal')
        .end((err, res) => {
          expect(res).to.have.status(202);
          done();
        });
      });
    });
  });

// ++++++++++++++
  after(done => {
    server.close();
    done();
  });
});
