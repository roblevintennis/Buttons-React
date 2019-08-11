// https://storybook.js.org/docs/configurations/custom-webpack-config/#using-your-existing-config
const path = require('path');
const custom = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};
