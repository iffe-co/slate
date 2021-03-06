const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const strip = require('@rollup/plugin-strip');
const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');
const progress = require('rollup-plugin-progress');
const postcss = require('rollup-plugin-postcss');
const ENV = require('./env');
const Util = require('./util');

// https://github.com/ezolenko/rollup-plugin-typescript2

const IGNORE_WARNING_CODE = ['UNRESOLVED_IMPORT', 'CIRCULAR_DEPENDENCY'];
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];

function getRollupConfig(config) {
  const { inputFile, outputFile, tsconfig, bundleType } = config;
  const inputOptions = {
    input: inputFile,
    plugins: [
      typescript({
        tsconfig,
        abortOnError: false,
        clean: true,
        check: false,
      }),
      progress({
        clearLine: true,
      }),
      babel({
        babelrc: false,
        inputSourceMap: true,
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: EXTENSIONS,
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                esmodules: true,
              },
            },
          ],
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
        plugins: [],
      }),
      postcss({
        autoModules: true,
      }),
      ENV.isProdEnv() &&
        strip({
          include: [],
          debugger: true,
          functions: ['assert.*'],
        }),
    ],
    onwarn: (warning, warn) => {
      if (IGNORE_WARNING_CODE.indexOf(warning.code) != -1) return;
      console.info('\r\n warning.code', warning.code);
      throw new Error(warning.message);
    },
  };

  const outputOptions = {
    file: outputFile,
    format: bundleType,
    sourcemap: true,
    //plugins: [ENV.isProdEnv() && terser()],
    plugins: [],
  };

  const watchOptions = {
    ...inputOptions,
    output: [outputOptions],
    watch: {},
  };

  return {
    inputOptions,
    outputOptions,
    watchOptions,
  };
}

function build(configs, isWatch, onAllBuildEnd) {
  let isFristBuild = true;
  let buildIndex = 0;
  let buildTotal = configs.length;
  Util.showBuildLog(`编译总数:`, `${buildTotal}个`);

  const buildByIndex = buildIndex => {
    const pkgConfig = configs[buildIndex];
    if (pkgConfig) {
      const rollupConfig = getRollupConfig(pkgConfig);
      Util.showBuildLog('准备编译:', `${buildIndex + 1}/${buildTotal}`, `> packageName : ${pkgConfig.pkgName}`);
      buildPkg(pkgConfig, rollupConfig, isWatch, onBuildPkgEndCallback);
    }
  };

  const onBuildPkgEndCallback = () => {
    buildIndex++;
    if (buildIndex < buildTotal) {
      buildByIndex(buildIndex);
    } else {
      Util.showBuildLog('全部编译结束');
      if (isWatch) {
        Util.showBuildLog('已开启热更新,监听中...');
      }
      if (isFristBuild) {
        isFristBuild = false;
        onAllBuildEnd();
      }
    }
  };

  buildByIndex(buildIndex);
}

async function buildPkg(pkgConfig, rollupConfig, isWatch, onBuildPkgEnd) {
  const { pkgName } = pkgConfig;
  const { inputOptions, outputOptions, watchOptions } = rollupConfig;

  const bundle = await rollup.rollup(inputOptions);
  const watcher = rollup.watch(watchOptions);
  await bundle.write(outputOptions);
  onWatcher(watcher, isWatch, pkgName).then(() => {
    onBuildPkgEnd();
  });
}

function onWatcher(watcher, isWatch, pkgName) {
  return new Promise(resolve => {
    watcher.on('event', event => {
      const { code } = event;
      if (code === 'BUNDLE_START') {
        Util.showBuildLog('开始编译', pkgName);
      } else if (code === 'BUNDLE_END') {
        const { duration } = event;
        Util.showBuildLog('编译成功:', pkgName, `, 耗时: `, duration);
        Util.showBuildLog('END');
        resolve();
        if (!isWatch) {
          watcher.close();
        }
      } else if (code === 'ERROR' || code === 'FATAL') {
        Util.showBuildLog('错误', event);
        if (!isWatch) {
          watcher.close();
        }
      }
    });
  });
}

module.exports = {
  build,
};
