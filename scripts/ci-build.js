const shell = require('shelljs');
const changeRes = shell.exec(`yarn lerna changed `, {
  silent: true,
});
const array = changeRes.split('\n');
const packages = array.filter(line => line.startsWith('@solidoc/'));
if (packages.length <= 0) {
  console.log('无需编译!');
  return;
}

const buildPacakges = packages.join(',');
console.log('need-build-package: ', buildPacakges);
shell.exec(`yarn build -p ${buildPacakges}`);
