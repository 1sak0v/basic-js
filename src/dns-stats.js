const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(urls) {
  const result = {};

  for (const url of urls) {
      const domains = url.split(".").reverse();

      const check = (d) => {
          const dot = `.${d}`;
          if (!result.hasOwnProperty(dot)) result[dot] = 0;
          result[dot]++;
      };

      check(
          domains.reduce((acc, curr) => {
              const dotDomain = `${acc}`;
              check(dotDomain);
              return acc.length > 0 ? `${dotDomain}.${curr}` : `.${curr}`;
          })
      );
  }

  return result;
}

module.exports = {
  getDNSStats
};
