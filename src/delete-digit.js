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
  let arr = n.toString().split('');
  let max = Number(arr.join('').replace(arr[0].toString(),''))
  for(let i = 1; i< arr.length;i++)
  {
    if(max < Number(arr.join('').replace(arr[i].toString(),'')))
      max = Number(arr.join('').replace(arr[i].toString(),''));
  }
  return max;
}

module.exports = {
  deleteDigit
};
