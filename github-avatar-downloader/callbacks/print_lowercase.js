var getHTML = require('./http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase (html) {
console.log(html.toLowerCase());
}

getHTML(options, printLowercase);
