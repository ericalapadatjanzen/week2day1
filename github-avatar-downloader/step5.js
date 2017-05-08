var getHTML = require('./http-functions');



var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
function printHTML (html) {
  console.log(html);
};

getHTML(options, printHTML);
