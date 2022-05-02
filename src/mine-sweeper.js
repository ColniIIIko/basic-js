const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineField = [];
  for(let i = 0; i< matrix.length;i++)
  {
    mineField[i] = [];
    for(let j = 0;j<matrix[0].length;j++)
    {
      mineField[i][j]=0;
    }
  }

  for(let i = 0;i<matrix.length;i++)
  {
    for(let j = 0;j<matrix[0].length; j++)
    {
      if(matrix[i][j])
      {
        (i + 1) < matrix.length &&
        mineField[i+1][j]++;
        (i - 1) >= 0 &&
        mineField[i-1][j]++;
        (j + 1) < matrix[0].length &&
        mineField[i][j+1]++;
        (j - 1) >= 0 &&
        mineField[i][j-1]++;
        (j - 1) >= 0 &&  (i - 1) >= 0 &&
        mineField[i-1][j-1]++;
        (j + 1) <  matrix[0].length  &&  (i + 1) < matrix.length &&
        mineField[i+1][j+1]++;
        (j + 1) <  matrix[0].length  &&  (i - 1) >= 0 &&
        mineField[i-1][j+1]++;
        (j - 1) >= 0  &&  (i + 1) < matrix.length &&
        mineField[i+1][j-1]++;

      }
    }
  }

  return mineField;


}

module.exports = {
  minesweeper
};
