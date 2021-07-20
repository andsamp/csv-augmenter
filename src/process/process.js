export const runProcessors = (data, config) => {
    const processors = config.processors;

    return processors.reduce((acc, processorName) => {
        return applyProcessor(processorName, acc, config);
    }, data)
}

const applyProcessor = (processorName,data, config) => {
    const { processor } = require(`../processors/${processorName}`);

    return data.reduce((acc, currentRecord) => {
        acc.push(processor(currentRecord, config))

        return acc;
    }, [])
}