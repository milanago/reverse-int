module.exports = function reverse (n) {
let str = n.toString()
let result = str.split('').reverse().join('')
return parseInt(result);
};
