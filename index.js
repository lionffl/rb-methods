const useArrayMethods = require('./methods/array')
const useStringMethods = require('./methods/string')
const useNumberMethods = require('./methods/number')

module.exports = (() => {
  useArrayMethods();
  useStringMethods();
  useNumberMethods();
})()