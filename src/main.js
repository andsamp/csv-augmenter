import yargs from 'yargs'
import {execute} from "./execute";

export const main = () => {
    const args = yargs(process.argv.slice(2))
        .option('config', {
            default: './config.json',
            type: 'string',
            describe: 'Path of config file to use.'
        })
        .option('input', {
            alias: 'i',
            type:'string',
            describe: 'Input file location(e.g., ../that-one-input.csv)'
        })
        .option('output', {
            alias: 'o',
            type: 'string',
            describe: 'Output destination(e.g., ./output-file.csv)'
        })
        .option('processors', {
            alias: 'p',
            type: 'array',
            describe: 'List of processors to use'
        })
        .argv;

    // TODO: parse flags and config.json to generate config object to drive processes

    const config = require(args.config);



    execute(config);

}