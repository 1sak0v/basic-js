const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;
  let array = n.toString().split('');

  const sum = (array) => {
    if (array.length === 1 && array[0] < 10) {
      res = array[0];
    } else {
      let str = array.join('');
      array = str.split('');
      let temp = 0;
      array.forEach(num => {
        temp += +num;
      });
      let tempArray = []
      tempArray.push(temp);
      sum(tempArray);
    }
  };

  sum(array);
  return res;
}

module.exports = {
  getSumOfDigits
};
