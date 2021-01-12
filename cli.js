#!/usr/bin/env node
var gha = require('./App');
(async () => {
(await gha(process.argv[2] || 'github')).map(event => console.log(event))
})();