const minimist = require('minimist');
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);
const fs = require('fs');
const path = require('path');
const { build } = require('./rollup.config');
const ENV = require('./env');
const shell = require('shelljs');

const getAllPkgConfigs = () => {
  const bundleType = 'es';
  const packages = fs.readdirSync(path.resolve(__dirname, '../packages/')).filter(item => /^([^.]+)$/.test(item));
  const allPkgConfigs = [];
  packages.forEach(directoryName => {
    const pkgPath = path.resolve(__dirname, '../packages/', directoryName);
    const { name: pkgName } = require(path.resolve(pkgPath, 'package.json'));
    const inputPath = path.resolve(pkgPath, './src');
    const inputFile = path.resolve(pkgPath, './src/index.ts');
    const outputPath = path.resolve(pkgPath, './dist');
    const outputFile = path.resolve(pkgPath, `./dist/index.${bundleType}.js`);
    const tsconfig = path.resolve(pkgPath, './tsconfig.json');
    allPkgConfigs.push({
      directoryName,
      pkgPath,
      pkgName,
      inputPath,
      inputFile,
      outputPath,
      outputFile,
      tsconfig,
      bundleType,
    });
  });
  return allPkgConfigs;
};

const allPkgConfigs = getAllPkgConfigs();
const { env, endshell, watch } = args;
const isWatch = !!watch;
ENV.setEnv(env);

const onAllBuildEnd = () => {
  if (endshell) {
    shell.exec(endshell, { async: true });
  }
};

if (args.p) {
  const pkgNames = args.p.split(',');
  const filterPkgConfigs = allPkgConfigs.filter(pkgConfig => {
    return pkgNames.indexOf(pkgConfig.directoryName) !== -1 || pkgNames.indexOf(pkgConfig.pkgName) !== -1;
  });
  if (filterPkgConfigs.length > 0) {
    build(filterPkgConfigs, isWatch, onAllBuildEnd);
  } else {
    console.error(`${args.p} 不存在!`);
  }
} else {
  build(allPkgConfigs, isWatch, onAllBuildEnd);
}
