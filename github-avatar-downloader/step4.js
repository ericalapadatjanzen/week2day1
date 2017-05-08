var https = require('https');

function getHTML (options, callback) {

var html = '';


https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    html += data
    console.log(data + '\n');
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

function printHTML (html) {
  console.log(html);
}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(options, printHTML);
