const Response = require('./models/response');
const ErrorMessage = require('./models/errorMessage');

module.exports = (err, res) => {
  if (err && err.send) err.send(res);
  else {
    const response = new Response('fail', new ErrorMessage('unknow'));
    response.send(res);
  }
};
