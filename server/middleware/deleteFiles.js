const fs = require('fs-extra');
const path = require('path');

const deleteFiles = (req, res, next) => {
  fs.emptyDirSync(path.join(path.resolve(), 'storage/imgs'));
  next();
}

module.exports = deleteFiles