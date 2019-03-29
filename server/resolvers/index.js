const resolversList = require('require-dir')();

module.exports = () => {
  const resolvers = [];
  Object.keys(resolversList).forEach((_resolver) => {
    // eslint-disable-next-line
    const resolver = require(`./${_resolver}`);
    resolvers.push(resolver);
  });
  return resolvers;
};
