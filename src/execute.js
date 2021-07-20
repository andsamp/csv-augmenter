import {readFile} from "./read/read-file";
import {writeFile} from "./write/write-file";
import {runProcessors} from "./process/process";

export const execute = async(config) => {
    console.log(config)
    const input = await readFile(config.read);
    console.log(input)

    // TODO: call process/run all processors
    const output = await runProcessors(input, config);

    // TODO: replace input with processed input...
    await writeFile(output, config.write);
}