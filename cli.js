var qif2json = require('./lib/qif2json.js'),
    file = process.argv[2];

if(!file){
    return console.error('Usage: qif2json [file]');
}

qif2json.parseFile(file, function(err, data){
    if(err){
        return console.error(err.message);
    }
    console.log(JSON.stringify(data));
});