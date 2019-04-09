const mongoose = require('mongoose');
const crypto = require('crypto');

const Cache = require('../helpers/cache');
const Response = require('../helpers/models/response');

const UserModel = mongoose.model('user');

const hashUser = (user) => {
  const userData = { ...user };
  delete userData.password;
  const hash = crypto.createHash('sha256');
  // eslint-disable-next-line no-underscore-dangle
  hash.update(JSON.stringify({ _id: userData._id, email: userData.email }));
  const accessToken = hash.digest('hex');
  const cipher = crypto.createCipher('aes-256-cbc', process.env.CIPHER_PASSWORD);
  let encrypted = cipher.update(JSON.stringify(userData), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { accessToken, encrypted };
};

class UserService {
  static async register(_userData) {
    try {
      const userData = { ..._userData };
      const user = await UserModel.create(userData);
      const userCache = { ...user._doc }; // eslint-disable-line no-underscore-dangle
      const { accessToken, encrypted } = hashUser(userCache);
      await Cache.set(accessToken, encrypted);
      return new Response('success', { data: { accessToken } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async login(userData) {
    try {
      const { accessToken, encrypted } = hashUser(userData);
      await Cache.set(accessToken, encrypted);
      return new Response('success', { data: { accessToken } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async logout(accessToken) {
    try {
      await Cache.delete(accessToken);
      return new Response('success', { data: { logout: true } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }

  static async update(id, data) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, { ...data }, { new: true });
      const userCache = { ...user._doc }; // eslint-disable-line no-underscore-dangle
      const { accessToken, encrypted } = hashUser(userCache);
      await Cache.set(accessToken, encrypted);
      return new Response('success', { data: { updated: true } });
    } catch (err) {
      throw new Response('fail', err);
    }
  }
}

module.exports = UserService;
