const { expect } = require("chai");
const request = require("request");
let cat;
let url = 'http://localhost:3000/api/cat';


describe('test GET api', function () {
    it('returns statusCode of 200', function (done) {
        request(url, function (error, response, bodyString) {

            if (bodyString) {
                let bodyObj = JSON.parse(bodyString);
                expect(bodyObj.message).to.equal('get all cats success');
            }

            done();
        });
    });
});

describe('test POST api', function () {
    it('post cat to DB', function (done) {
        request.post({ url: url, form: cat }, function (error, response, bodyString) {
            if (bodyString) {
                let bodyObj = JSON.parse(bodyString);
                expect(bodyObj.message).to.equal('success');
            }

            done();
        });
    });
});

describe('test DELETE api', function () {
    it('delete a cat', function (done) {
        request.delete({ url: url, form: cat }, function (a, b, c) {
            done();
        });
    });
});