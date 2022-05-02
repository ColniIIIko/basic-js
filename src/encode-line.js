const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let tempStr = '';
  let counter = 1;
  let prev = str[0];
  if(str =='')
    return '';
  for(let i = 1;i<str.length;i++)
  {
    if(prev == str[i])
    {
      counter++;
    }else
    {
      tempStr += (counter == 1) ? prev : (counter.toString() + prev);
      counter = 1;
    }
    prev = str[i];
  }

  tempStr += (counter == 1) ? prev : (counter.toString() + prev);
  return tempStr;
}

module.exports = {
  encodeLine
};
