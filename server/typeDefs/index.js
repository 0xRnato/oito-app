const requireDir = require('require-dir');

const typeDefs = requireDir('./', { extensions: ['.graphql'] });
const { importSchema } = require('graphql-import');

module.exports = () => {
  const typeDefsArray = [];
  Object.keys(typeDefs).forEach((_typeDefs) => {
    // eslint-disable-next-line
    const typeDefsData = importSchema(`./${_typeDefs}`);
    typeDefsArray.push(typeDefsData);
  });
  return typeDefsArray;
};
