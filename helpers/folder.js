const { readdirSync } = require('fs');

module.exports = {
    sweepFolder: (folderPath) => {
        const files = [];

        readdirSync(folderPath).forEach(file => {
            files.push(file);
        });

        return files;
    }
};