const { injectBabelPlugin } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = injectBabelPlugin('babel-plugin-transform-decorators-legacy', config);

  config = injectBabelPlugin('babel-plugin-glamorous-displayname', config);

  config = injectBabelPlugin('babel-plugin-preval', config);

  config = injectBabelPlugin('babel-plugin-emotion', config);

  config = injectBabelPlugin('babel-plugin-transform-do-expressions', config);
  config = rewireEslint(config, env);
  return config;
};
