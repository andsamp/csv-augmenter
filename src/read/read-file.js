const parser = require('csv-parser');
const fs = require('fs');

export const readFile = async (readConfig) => {
    const entries = [];

    await new Promise((resolve) => {
        fs.createReadStream(readConfig.file)
            .pipe(parser())
            .on('data', (entry) => entries.push(entry))
            .on('end', () => {
                console.log('Finished reading file...');
                resolve();
            });
    });

    return entries;
}