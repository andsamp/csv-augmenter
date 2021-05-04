const chalk = require('chalk')

export const logInfo = message => {
    console.log(message)
}

export const logWarning = message => {
    console.warn(chalk.yellow(message));
}

export const logError = message => {
    console.error(chalk.bgRed(message));
}

export const logSuccess = message => {
    console.log(chalk.green(message));
}