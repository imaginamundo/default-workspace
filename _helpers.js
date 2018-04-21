const { readdirSync } = require('fs');
const path = require('path');

module.exports = {
    sweepFolder: (folderPath) => {
        // To do:
        // * Get only files from specific extension (ex.: '.js' or ['.js', '.jsx']);
        // * Exclude file from list (ex.: 'index.js', or ['index.js', 'bundle.js']);
        // * Paramethers as string or object, exemple:
        // sweepFolder('path/to/folder');
        // or
        // sweepFolder({
        //     path: 'path/to/folder',
        //     extension: ['.js', '.jsx'],
        //     exclude: ['index.js', 'bundle.js'] 
        // });

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