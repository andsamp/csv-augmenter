#!/usr/bin/env node

require = require("esm")(module /*, options */)

require('../src/main').main(process.argv)