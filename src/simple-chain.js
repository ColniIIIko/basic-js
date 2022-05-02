const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && position > 0 && position <= this.getLength()){
      this.arr.splice(position-1,1);
      return this;
    }else
    {
      this.arr.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let temp = this.arr.slice();
    this.arr.length = 0;
    return temp.join('~~');
  }
};

module.exports = {
  chainMaker
};
