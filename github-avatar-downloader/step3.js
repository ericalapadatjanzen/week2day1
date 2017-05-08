var https = require('https');

function getAndPrintHTML (options) {

var allData = '';


https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    allData += data
    console.log(data + '\n');
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}
getAndPrintHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
});