var axios = require('axios')
module.exports = async username => {
var data = axios.get(`https://api.github.com/users/${username}/events`)
console.log(data.data)
}