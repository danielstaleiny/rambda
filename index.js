const replace = require('ramda/replace')
const _= require('ramda/__')

var greet = replace('{name}', R.__, 'Hello, {name}!')
console.log(greet('Alice'))
console.log(typeof greet)

