const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options?.repeatTimes || 1;
  let separator = options?.separator || '+';
  let addition = options?.addition;
  let additionRepeatTimes = options?.additionRepeatTimes || 1;
  let additionSeparator = options?.additionSeparator || '|';
  let res = [];
  let additions = [];

  if (addition === undefined) {
    addition = '';
  }
  if (addition === null) {
    addition = 'null';
  }

  for (let i = 1; i <= additionRepeatTimes; i++) {
    additions.push(addition);
  }

  let additionWithAdditionSeparator = additions.join(`${additionSeparator}`);

  for (let i = 1; i <= repeatTimes; i++) {
    res.push(str + additionWithAdditionSeparator);
  }

  return res.join(`${separator}`);
}

module.exports = {
  repeater
};
