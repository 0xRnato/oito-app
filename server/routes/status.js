const Response = require('../helpers/models/response');

module.exports = (router) => {
  router.get('/', (req, res) => {
    const response = new Response('success', { data: 'API OK' });
    response.send(res);
  });
};
