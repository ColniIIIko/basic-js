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
  const opts = {repeatTimes: 1,
                separator: '+',
                addition: '',
                additionRepeatTimes: 1,
                additionSeparator: '|'};

  for(let key in options)
  {
    opts[key] = options[key];
  }

  let returnStr = '';

  for(let i = 0; i<opts.repeatTimes;i++)
  {
    returnStr += str;
    for(let j = 0; j<opts.additionRepeatTimes;j++)
    {
      returnStr+=opts.addition;
      if(j!=opts.additionRepeatTimes-1)
      {
        returnStr+=opts.additionSeparator;
      }
    }

    if(i!=opts.repeatTimes-1)
    {
      returnStr+=opts.separator;
    }
  }

  return returnStr;
}

module.exports = {
  repeater
};
