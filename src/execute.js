import {readFile} from "./read/read-file";
import {writeFile} from "./write/write-file";

export const execute = async(config) => {
    const input = await readFile(config.read);
    console.log(input)

    // TODO: call process/run all processors

    // TODO: replace input with processed input...
    await writeFile(input, config.write);
}