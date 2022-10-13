const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let res = [];

  for(let i = 0; i < array.length; i++) {
    let array = n.toString().split('');
    array.splice(i, 1);
    let num = +(array.join(''));
    res.push(num);
  }

  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
