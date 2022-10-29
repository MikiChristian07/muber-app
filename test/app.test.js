import assert from 'assert';
import request from 'supertest';
import app from '../app.js'

describe('The express app', () => {
    it('handles a GET request to /api', (done) => {
        request(app)
            .get('/')
            .end((err, response) => {
                console.log(response);
                done();
            })
    })
})