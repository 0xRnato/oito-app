const CategoryService = require('../services/category');
const handleError = require('../helpers/handleError');

module.exports = (router) => {
  router.get('/', async (req, res) => {
    try {
      const response = await CategoryService.getAll();
      response.send(res);
    } catch (err) {
      handleError(err, res);
    }
  });
};
