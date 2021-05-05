import {logError, logInfo, logSuccess} from "../utils/logging";
import {generateDefaultHeaders} from "../utils/header-utils";

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

export const writeFile = (data, writeConfig) => {
    const csvWriter = createCsvWriter({
        path: writeConfig.file,
        header: writeConfig.headerMappings || generateDefaultHeaders(Object.keys(data[0])),
    });

    return csvWriter.writeRecords(data)
        .then(() => {
            logSuccess('Finished writing file.')
        }).catch((err) => {
            logError('An error was encountered while writing to file...')
            logInfo(err)
        })
}