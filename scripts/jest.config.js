// https://github.com/cnlinge/jest-js-ts-start
// https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs

const fs = require('fs');
const path = require('path');

const ES_MODEL_WHITELIST = ['@fluidframework', '@solidoc', 'lodash-es'];
const EXTENSIONS = ['ts', 'tsx', 'js', 'jsx'];

const createPkgConfigs = () => {
  const moduleNameMapper = {};
  const packages = fs.readdirSync(path.resolve(__dirname, '../packages/')).filter(item => /^([^.]+)$/.test(item));
  packages.forEach(item => {
    const pkgPath = path.resolve(__dirname, '../packages/', item);
    const { name } = require(path.resolve(pkgPath, 'package.json'));
    const pkgRootPath = `<rootDir>/${item}`;
    moduleNameMapper[`^${name}$`] = `${pkgRootPath}/src`;
  });
  return {
    moduleNameMapper,
  };
};

module.exports = {
  watchPlugins: ['jest-watch-yarn-workspaces'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-node',
  verbose: true,
  testMatch: ['**/test/?(*.)+(spec).[jt]s?(x)'],
  rootDir: '../packages',
  moduleFileExtensions: EXTENSIONS,
  coverageDirectory: path.resolve(__dirname, '../coverage'),
  collectCoverageFrom: [`**/src/*.{${EXTENSIONS.join(',')}}`, '!**/node_modules/**', '!**/vendor/**'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [`node_modules/(?!(${ES_MODEL_WHITELIST.join('|')}))`],
  ...createPkgConfigs(),
};
