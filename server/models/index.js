const models = require('require-dir')();

module.exports = () => {
  Object.keys(models).forEach((model) => {
    // eslint-disable-next-line
    require(`./${model}`);
  });
};
