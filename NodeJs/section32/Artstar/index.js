const figlet = require('figlet');

figlet('Hellow World!', function(err, data) {
    if(err) {
        console.log('err');
        console.dir(err);
        return;
    }
    console.log(data);
});