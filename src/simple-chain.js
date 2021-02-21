const CustomError = require("../extensions/custom-error");

const chainMaker = {
  unit: [],
  getLength() {
    return this.unit.length;
  },
  addLink(value) {
    this.unit.push('' + value);
    return this;
  },
  removeLink(position) {
    if (position <= 0) {
      this.unit = [];
      return err;
    } else {
      this.unit.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.unit.reverse();
    return this;
  },
  finishChain() {
    let output = `( ${this.unit.join(' )~~( ')} )`;
    this.unit = [];
    return output;
  }
};

module.exports = chainMaker;
