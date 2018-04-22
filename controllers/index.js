const path = require('path');
const { sweepFolder } = require('../helpers/folder');

const controllerFiles = sweepFolder('./controllers');

const availableModules = {};

controllerFiles.forEach(file => {
    file = path.parse(file).name;

    if (file !== 'index') {
        availableModules[file] = require(path.join(__dirname, file));
    }
});

module.exports = availableModules;