var getHTML = require('./http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
  /* Write your code here! */

}

getHTML(options, printReverse);