const { readdirSync } = require('fs');
const path = require('path');

module.exports = {
    sweepFolder: (folderPath) => {
        const files = [];

        readdirSync(folderPath).forEach(file => {
            files.push(file);
        });

        return files;
    }
};