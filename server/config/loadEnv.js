const dotenv = require('dotenv');

module.exports = () => {
  const result = dotenv.config();
  if (result.error && !process.env.NODE_ENV) throw new Error('Missing .env file');
};
