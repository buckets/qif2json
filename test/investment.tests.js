'use strict';
var qif2json = require('../lib/qif2json.js'),
    fs = require('fs');

describe('investments', function(done) {
    var reader = fs.createReadStream(__dirname + '/files/investments.qif');

    xit ('can parse investments', function(done) {
        qif2json.parseStream(reader, {dateFormat: 'us'}, function(err, qifData) {
            expect(err).toBeUndefined();

            expect(qifData.type).toEqual('Invst');
            expect(qifData.transactions.length).toEqual(2);
            expect(qifData.transactions[0].date).toEqual('1993-08-25');

            done();
        });
    });
});
