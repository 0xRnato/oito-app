const redis = require('redis');
const { promisify } = require('util');

const Logger = require('./logger');

const logger = new Logger();
const _cache = {}; // eslint-disable-line no-underscore-dangle

class Cache {
  static createConnection() {
    if (!_cache.client || !_cache.get || !_cache.set) {
      _cache.client = redis.createClient({
        host: process.env.CACHE_HOST,
        port: process.env.CACHE_PORT,
        password: process.env.CACHE_PASSWORD,
      });
      _cache.client.on('ready', () => {
        logger.info('Cache connection online');
      });
      _cache.client.on('end', (msg) => {
        logger.info(msg);
      });
      _cache.client.on('warning', (msg) => {
        logger.error(msg);
      });
      _cache.client.on('error', (msg) => {
        logger.error(msg);
      });
      _cache.client.on('reconnecting', (msg) => {
        logger.error(msg);
      });
      _cache.get = promisify(_cache.client.get).bind(_cache.client);
      _cache.set = promisify(_cache.client.set).bind(_cache.client);
      _cache.del = promisify(_cache.client.del).bind(_cache.client);
    }
  }

  static async get(key) {
    try {
      if (!_cache.client || !_cache.get || !_cache.set) this.createConnection();
      const value = await _cache.get(key);
      return value;
    } catch (err) {
      throw err;
    }
  }

  static async set(key, value) {
    try {
      if (!_cache.client || !_cache.get || !_cache.set) this.createConnection();
      const result = await _cache.set(key, value, 'EX', 86400);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async delete(key) {
    try {
      if (!_cache.client || !_cache.get || !_cache.set) this.createConnection();
      const result = await _cache.del(key);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Cache;
