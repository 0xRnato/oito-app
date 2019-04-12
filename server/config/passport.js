const crypto = require('crypto');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const BearerStrategy = require('passport-http-bearer').Strategy;

const Cache = require('../helpers/cache');
const Response = require('../helpers/models/response');
const ErrorMessage = require('../helpers/models/errorMessage');

const UserModel = mongoose.model('user');

const isValidPassword = async (password, userPassword) => {
  const isValid = await bcrypt.compare(password, userPassword);
  return isValid;
};

passport.serializeUser((user, done) => {
  done(null, user._id); // eslint-disable-line no-underscore-dangle
});

passport.deserializeUser(async (_id, done) => {
  try {
    const user = await UserModel.findById(_id)
      .populate('category')
      .exec();
    const userData = { ...user._doc }; // eslint-disable-line no-underscore-dangle
    delete userData.password;
    done(null, userData);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new BasicStrategy(async (email, password, done) => {
    try {
      const userData = await UserModel.findOne({ email })
        .populate('category')
        .exec();
      // eslint-disable-next-line no-underscore-dangle
      if (!userData || !userData._doc) {
        throw new Response('fail', new ErrorMessage('emailNotFound'));
      }
      // eslint-disable-next-line no-underscore-dangle
      const user = { ...userData._doc };
      const validPassword = await isValidPassword(password, user.password);
      if (!validPassword) {
        throw new Response('fail', new ErrorMessage('passwordWrong'));
      }
      delete user.password;
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const encrypted = await Cache.get(token);
      if (!encrypted) throw new Response('fail', new ErrorMessage('sessionNotFound'));
      const decipher = crypto.createDecipher('aes-256-cbc', process.env.CIPHER_PASSWORD);
      let user = decipher.update(encrypted, 'hex', 'utf8');
      user += decipher.final('utf8');
      return done(null, JSON.parse(user));
    } catch (err) {
      return done(err);
    }
  }),
);
