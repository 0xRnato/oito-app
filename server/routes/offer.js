const passport = require('passport');

const OfferService = require('../services/offer');
const handleError = require('../helpers/handleError');

module.exports = (router) => {
  router.post('/', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        // eslint-disable-next-line no-underscore-dangle
        const response = await OfferService.create(user._id, req.body);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.get('/employer/all', async (req, res) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const response = await OfferService.getAllEmployer();
      response.send(res);
    } catch (err) {
      handleError(err, res);
    }
  });

  router.get('/employee/all', async (req, res) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const response = await OfferService.getAllEmployee();
      response.send(res);
    } catch (err) {
      handleError(err, res);
    }
  });

  router.get('/employer', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        // eslint-disable-next-line no-underscore-dangle
        const response = await OfferService.getAllEmployerByUser(user._id);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.get('/employee', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        // eslint-disable-next-line no-underscore-dangle
        const response = await OfferService.getAllEmployeeByUser(user._id);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });
};
