const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for(let i = 0; i<arr.length - 1;i++)
  {
    for(let j = 0; j< arr.length - i - 1;j++)
    {
      let offset = 0
      if(arr[j]==-1)
        continue;
      while(arr[j+1+offset]==-1)
        offset++;
      if(offset > arr.length - j - 1)
        continue;
      if(arr[j] > arr[j+1+offset])
      {
        let temp = arr[j];
        arr[j] = arr[j+1+offset];
        arr[j+1+offset] = temp;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
