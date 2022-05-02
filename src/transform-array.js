const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr))
  {
    let returnArr = [];
    for(let i = 0;i<arr.length;i++)
    {
      if(typeof arr[i] === 'string' && arr[i].match(/(double)|(discard)/))
      {
        if(arr[i].match(/next/) && i!=arr.length-1)
        {
          if(arr[i].match(/double/))
          {
            returnArr.push(arr[i+1]);
          }
          else
          {
            i++;
            continue;
          }
        }

        if(arr[i].match(/prev/) && i!=0)
        {
          if(arr[i].match(/double/))
          {
            if(returnArr[returnArr.length-1]==arr[i-1]) 
            {
              returnArr.push(arr[i-1]);
            }
          }
          else
          {
            if(returnArr[returnArr.length-1]==arr[i-1])
            {
              returnArr.pop();
            }
          }
        }
      }else
      {
        returnArr.push(arr[i]);
      }

    }
    return returnArr;
  }else{
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
