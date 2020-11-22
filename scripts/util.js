const showBuildLog = (type, ...arg) => {
  console.log(`[ build ] ${type} `, ...arg);
};

const showPublishLog = (type, ...arg) => {
  console.log(`[ publish ] ${type} `, ...arg);
};

module.exports = {
  showBuildLog,
  showPublishLog,
};
