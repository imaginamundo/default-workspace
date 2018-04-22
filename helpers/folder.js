const { readdirSync } = require('fs');
const path = require('path');

module.exports = {
    sweepFolder: (folderPath) => {
        const files = [];

        readdirSync(folderPath).forEach(file => {
            files.push(file);
        });

        return files;
    },
    dynamicEntries: (folderPath, distPath) => {
        const folderName = folderPath
            .split('/')
            .pop();
        const files = module.exports.sweepFolder(folderPath);
        const entries = {};

        files.map(file => {
            const folder = 'structure';
            const splittedFile = file.split('.');
            splittedFile.pop();

            const fileName = splittedFile.join('.');

            entries[`${distPath}/${folderName}/${fileName}`] = `${folderPath}/${fileName}`;
        });

        return entries;
    }
};