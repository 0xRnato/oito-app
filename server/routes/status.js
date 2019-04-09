const Response = require('../helpers/models/response');
const ErrorMessage = require('../helpers/models/errorMessage');

module.exports = (router) => {
  router.get('/', (req, res) => {
    if (!req.headers.authorization || req.headers.authorization !== process.env.API_KEY) {
      const response = new Response('fail', new ErrorMessage('withoutCredentials'));
      response.send(res);
    } else {
      const response = new Response('success', { data: 'API OK' });
      response.send(res);
    }
  });
};
