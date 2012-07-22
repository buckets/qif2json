var qif2json = require('../lib/qif2json.js');

describe('qif2json', function(){
    it('Can parse Bank example', function(){
        var data = qif2json.parse('!Type:Bank\r\n\
D03/03/10\r\n\
T-379.00\r\n\
PCITY OF SPRINGFIELD\r\n\
^\r\n\
D03/04/10\r\n\
T-20.28\r\n\
PYOUR LOCAL SUPERMARKET\r\n\
^\r\n\
D03/03/10\r\n\
T-421.35\r\n\
PSPRINGFIELD WATER UTILITY\r\n\
^');

        expect(data.type).toEqual('Bank');
        expect(data.transactions.length).toEqual(3);
        
        expect(data.transactions[0].date).toEqual('2010-03-03');
        expect(data.transactions[0].amount).toEqual(-379);
        expect(data.transactions[0].payee).toEqual('CITY OF SPRINGFIELD');
        
        expect(data.transactions[1].date).toEqual('2010-04-03');
        expect(data.transactions[1].amount).toEqual(-20.28);
        expect(data.transactions[1].payee).toEqual('YOUR LOCAL SUPERMARKET');
        
        expect(data.transactions[2].date).toEqual('2010-03-03');
        expect(data.transactions[2].amount).toEqual(-421.35);
        expect(data.transactions[2].payee).toEqual('SPRINGFIELD WATER UTILITY');
    });
});