const passport = require('passport');

const UserService = require('../services/user');
const handleError = require('../helpers/handleError');
const Response = require('../helpers/models/response');

module.exports = (router) => {
  router.get('/', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        const response = new Response('success', { data: { ...user } });
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.patch('/', (req, res, next) => {
    passport.authenticate('bearer', async (_err, user) => {
      try {
        if (_err) throw _err;
        // eslint-disable-next-line no-underscore-dangle
        const response = await UserService.update(user._id, req.body);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.post('/', async (req, res) => {
    try {
      const response = await UserService.register(req.body);
      response.send(res);
    } catch (err) {
      handleError(err, res);
    }
  });

  router.get('/login', (req, res, next) => {
    passport.authenticate('basic', async (_err, user) => {
      try {
        if (_err) throw _err;
        const response = await UserService.login(user);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });

  router.get('/logout', (req, res, next) => {
    passport.authenticate('bearer', async (_err) => {
      try {
        if (_err) throw _err;
        const response = await UserService.logout(req.headers.authorization.split(' ')[1]);
        response.send(res);
      } catch (err) {
        handleError(err, res);
      }
    })(req, res, next);
  });
};
