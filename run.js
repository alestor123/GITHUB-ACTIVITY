var gha = require('./App');
(async () => {
(await gha('alestor123')).map(event => console.log(event))
})();