const passport = require('passport');

const ProposeService = require('../services/propose');
const handleError = require('../helpers/handleError');

module.exports = (router) => {
  router.post('/', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        // eslint-disable-next-line no-underscore-dangle
        const response = await ProposeService.create(user._id, req.body);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.get('/', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        // eslint-disable-next-line no-underscore-dangle
        const response = await ProposeService.getAllByUserId(user._id);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.post('/messages', (req, res, next) => {
    passport.authenticate('bearer', async (_err) => {
      try {
        if (_err) throw _err;
        const response = await ProposeService.newMessage(req.body.proposeId, req.body.data);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });
};
