

module.exports = function getHTML (options, callback) {
  var https = require('https');
  var html = '';

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      html += data;
      // console.log(data + '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(html);
    });

  });
}


